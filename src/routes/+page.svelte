<script lang="ts">
	import type { PageProps } from './$types';
	import { env } from '$env/dynamic/public';
	import { translate } from '$lib/client/api';
	import LanguagePane from '$lib/client/layout/LanguagePane.svelte';
	import Debouncer from '$lib/client/debouncer';
	import { LanguageCode } from '$lib/languages';
	import { onMount, untrack } from 'svelte';

	let { data }: PageProps = $props();

	const inputDebouncer = new Debouncer(500);

	let textInput = $state('');
	let translatedOutput = $state('');

	let isLoading = $state(false);

	let sourceLanguage = $state(LanguageCode.en);
	let targetLanguage = $state(LanguageCode.fr);

	async function doTranslate() {
		if (isLoading) return; // prevent multiple concurrent translations
		if (textInput.trim() === '') {
			translatedOutput = '';
			return;
		}
		translatedOutput = '';
		isLoading = true;
		try {
			for await (const token of translate(sourceLanguage, targetLanguage, textInput)) {
				translatedOutput += token;
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
		sourceLanguage = localStorage.getItem('sourceLanguage') as LanguageCode || sourceLanguage;
		targetLanguage = localStorage.getItem('targetLanguage') as LanguageCode || targetLanguage;

		$effect(() => {
			localStorage.setItem('sourceLanguage', sourceLanguage);
			localStorage.setItem('targetLanguage', targetLanguage);
		});
	})
</script>

<svelte:head>
	<title>{env.PUBLIC_SITENAME || "LLM-Translate"}</title>
</svelte:head>

<div class="flex h-full w-full flex-row space-x-1 p-8">
	<div class="flex-1">
		<LanguagePane
			supportedLanguages={data.metadata.supportedLanguages}
			disableLanguage={data.metadata.autodetectSourceLanguage}
			disabled={isLoading}
			bind:text={textInput}
			bind:chosenLanguage={sourceLanguage}
			disallowedLanguage={targetLanguage}
			placeholder="Enter text to translate..."
		/>
	</div>

	<div>
		{#if data.metadata.autodetectSourceLanguage}
			<div class="w-6"></div>
		{:else}
			<button
				class="mt-1 flex h-7 w-7 items-center justify-center rounded-lg text-sand-11 hover:bg-sand-3"
				onclick={() => {
					[sourceLanguage, targetLanguage] = [targetLanguage, sourceLanguage];
				}}
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
		{/if}
	</div>

	<div class="flex-1">
		<LanguagePane
			supportedLanguages={data.metadata.supportedLanguages}
			bind:text={translatedOutput}
			bind:chosenLanguage={targetLanguage}
			disallowedLanguage={data.metadata.autodetectSourceLanguage ? undefined : sourceLanguage}
			placeholder="Translation will appear here..."
			disabled
		/>
	</div>
</div>
