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
	let translatedTokens = $state(0);
	let copyTranslationConfirm = $state(false);

	let isLoading = $state(false);

	let sourceLanguage = $state(LanguageCode.auto);
	let targetLanguage = $state(LanguageCode.en);
	let recentLanguages = $state([LanguageCode['en'], LanguageCode['es'], LanguageCode['fr']]);

	async function doTranslate() {
		if (isLoading) return; // prevent multiple concurrent translations
		if (textInput.trim() === '') {
			translatedOutput = '';
			translatedTokens = 0;
			return;
		}
		translatedOutput = '';
		translatedTokens = 0;
		isLoading = true;
		try {
			for await (const token of translate(sourceLanguage, targetLanguage, textInput)) {
				translatedOutput += token;
				translatedTokens++;
			}
			translatedOutput = translatedOutput.trim();
		} finally {
			isLoading = false;
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

					<div>
						{getWordCount(textInput)}
						{getWordCount(textInput) == 1 ? 'word' : 'words'}
					</div>
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
						<div>
							<LoadingSpinner />
						</div>
					{/if}

					<div class="flex-1"></div>

					<button
						class:hover:text-gray-12={!copyTranslationConfirm && translatedTokens > 0}
						disabled={translatedTokens == 0}
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

					<div>
						{getWordCount(translatedOutput)}
						{getWordCount(translatedOutput) == 1 ? 'word' : 'words'}
						<!-- /
						{translatedTokens}
						{translatedTokens == 1 ? 'token' : 'tokens'} -->
					</div>
				</div>
			</TextField>
		</div>
	</div>
</div>
