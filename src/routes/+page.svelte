<script lang="ts">
	import type { PageProps } from './$types';
	import { env } from '$env/dynamic/public';
	import { translate } from '$lib/client/api';
	import Debouncer from '$lib/client/debouncer';
	import { LanguageCode } from '$lib/languages';
	import { onMount, untrack } from 'svelte';
	import LanguageSelector from '$lib/client/layout/LanguageSelector.svelte';
	import TextField from '$lib/client/layout/TextField.svelte';
	import { getWordCount } from '$lib/client/words';
	import LoadingSpinner from '$lib/client/layout/LoadingSpinner.svelte';

	let { data }: PageProps = $props();

	const inputDebouncer = new Debouncer(500);

	let textInput = $state('');
	let translatedOutput = $state('');
	let copyTranslationConfirm = $state(false);
	let wasAborted = $state(false);

	let isLoading = $state(false);
	let translatedTokens = $state(0);
	let translateElapsedTimeMs = $state(0);
	let abortController: AbortController | null = $state(null);

	let sourceLanguage = $state(LanguageCode.auto);
	let targetLanguage = $state(LanguageCode.en);
	let recentLanguages = $state([LanguageCode['en'], LanguageCode['es'], LanguageCode['fr']]);

	async function doTranslate() {
		if (isLoading) return; // prevent multiple concurrent translations
		if (textInput.trim() === '') {
			translatedOutput = '';
			translatedTokens = 0;
			translateElapsedTimeMs = 0;
			return;
		}
		translatedOutput = '';
		translatedTokens = 0;
		translateElapsedTimeMs = 0;
		isLoading = true;
		abortController = new AbortController();
		wasAborted = false;

		abortController.signal.addEventListener('abort', () => {
			wasAborted = true;
		});

		const startedAt = performance.now();
		let translationBuffer = '';
		let translatedTokensBuffer = 0;

		try {
			function update() {
				// Avoid mutating faster than the UI can update. perf :^)
				translatedOutput = translationBuffer;
				translatedTokens = translatedTokensBuffer;
				translateElapsedTimeMs = performance.now() - startedAt;
				if (isLoading) {
					requestAnimationFrame(update);
				}
			}
			requestAnimationFrame(update);

			for await (const chunk of translate(
				sourceLanguage,
				targetLanguage,
				textInput,
				abortController.signal
			)) {
				translationBuffer += chunk.content;
				translatedTokensBuffer = chunk.totalTokens;
			}
		} finally {
			isLoading = false;
			translatedOutput = translationBuffer.trim();
			translatedTokens = translatedTokensBuffer;
			translateElapsedTimeMs = performance.now() - startedAt;
			abortController = null;
		}
	}

	onMount(() => {
		$effect(() => {
			textInput; // on mutate
			sourceLanguage; // on mutate
			targetLanguage; // on mutate
			untrack(() => inputDebouncer.debounce(doTranslate));
		});
	});

	onMount(() => {
		sourceLanguage = (localStorage.getItem('sourceLanguage') as LanguageCode) || sourceLanguage;
		targetLanguage = (localStorage.getItem('targetLanguage') as LanguageCode) || targetLanguage;
		recentLanguages =
			(localStorage.getItem('recentLanguages')?.split(',') as LanguageCode[]) || recentLanguages;

		if (sourceLanguage == LanguageCode.auto && !data.metadata.autodetectSourceLanguage) {
			sourceLanguage = recentLanguages[0];
			if (sourceLanguage == targetLanguage) {
				targetLanguage = recentLanguages[1];
			}
		}

		$effect(() => {
			localStorage.setItem('sourceLanguage', sourceLanguage);
			localStorage.setItem('targetLanguage', targetLanguage);
			localStorage.setItem('recentLanguages', recentLanguages.join(','));
		});
	});

	function swapLanguages() {
		if (sourceLanguage == LanguageCode.auto) {
			// Pick a target to swap with, since it's illegal for target to be AUTO.
			sourceLanguage = targetLanguage;
			targetLanguage = recentLanguages.find((lang) => lang != sourceLanguage)!;
			return;
		}

		[sourceLanguage, targetLanguage] = [targetLanguage, sourceLanguage];
	}
</script>

<svelte:head>
	<title>{env.PUBLIC_SITENAME || 'LLM-Translate'}</title>
</svelte:head>

<div class="flex h-full w-full flex-col space-y-3 p-4 sm:p-6 md:p-8">
	<div class="flex flex-col items-center space-y-1 md:flex-row md:space-x-2">
		<div class="w-full flex-1">
			<LanguageSelector
				supportedLanguages={data.metadata.supportedLanguages}
				bind:recentLanguages
				supportsAutoDetect={data.metadata.autodetectSourceLanguage}
				bind:chosenLanguage={sourceLanguage}
				disallowedLanguage={targetLanguage}
				onSwap={swapLanguages}
			/>
		</div>

		<button
			class="flex items-center justify-center rounded-full p-2 text-gray-11 hover:bg-gray-3 disabled:opacity-50 disabled:hover:bg-transparent"
			disabled={sourceLanguage == LanguageCode.auto}
			onclick={swapLanguages}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M8 3 4 7l4 4" />
				<path d="M4 7h16" />
				<path d="m16 21 4-4-4-4" />
				<path d="M20 17H4" />
			</svg>
			<span class="sr-only">Swap languages</span>
		</button>

		<div class="w-full flex-1">
			<LanguageSelector
				supportedLanguages={data.metadata.supportedLanguages}
				bind:recentLanguages
				bind:chosenLanguage={targetLanguage}
				disallowedLanguage={sourceLanguage}
				onSwap={swapLanguages}
			/>
		</div>
	</div>

	<div class="flex w-full flex-1 flex-col space-y-2 md:flex-row md:space-x-3">
		<div class="basis-1/2">
			<TextField
				bind:text={textInput}
				placeholder="Enter text to translate"
				language={sourceLanguage}
				disabled={isLoading}
			>
				<div class="flex flex-row space-x-2">
					<div class="flex-1"></div>

					<span class="tabular-nums">
						{getWordCount(textInput)}
						{getWordCount(textInput) == 1 ? 'word' : 'words'}
					</span>
				</div>
			</TextField>
		</div>

		<div class="basis-1/2">
			<TextField
				bind:text={translatedOutput}
				placeholder="Translation will appear here"
				language={targetLanguage}
				readonly
			>
				<div class="flex flex-row space-x-2">
					{#if isLoading}
						<button
							onclick={() => abortController?.abort('User requested cancellation')}
							class="group"
							style:width="14px"
						>
							<span class="group-hover:hidden">
								<LoadingSpinner />
							</span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="hidden h-4 w-4 -translate-y-0.5 group-hover:inline"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
							>
						</button>
					{/if}

					{#if wasAborted}
						<span> Cancelled </span>

						<button onclick={doTranslate} class="text-sm underline hover:text-gray-11">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path
									d="M3 3v5h5"
								/></svg
							>

							<span class="sr-only">Retry translation</span>
						</button>
					{:else if translateElapsedTimeMs > 0}
						{@const seconds = (translateElapsedTimeMs / 1000).toFixed(1)}
						<span class="tabular-nums">
							{seconds}s
						</span>
					{/if}

					<div class="flex-1"></div>

					<button
						class:hover:text-gray-12={!copyTranslationConfirm && translatedTokens > 0}
						disabled={translatedTokens == 0 || isLoading}
						onclick={() => {
							if (copyTranslationConfirm) return; // prevent spamming the copy button
							navigator.clipboard.writeText(translatedOutput);
							copyTranslationConfirm = true;
							setTimeout(() => (copyTranslationConfirm = false), 1500);
						}}
					>
						{#if copyTranslationConfirm}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg
							>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path
									d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
								/></svg
							>
						{/if}
						<span class="sr-only">Copy translation to clipboard</span>
					</button>

					<span class="tabular-nums">
						{getWordCount(translatedOutput)}
						{getWordCount(translatedOutput) == 1 ? 'word' : 'words'}
					</span>

					<span aria-hidden="true"> / </span>

					<span class="tabular-nums">
						{translatedTokens}
						{translatedTokens == 1 ? 'token' : 'tokens'}
					</span>
				</div>
			</TextField>
		</div>
	</div>
</div>
