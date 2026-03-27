<script lang="ts">
	import { LanguageCode, ROOT_LANGUAGES_MAPPED } from '$lib/languages';
	import { ALL_LANGUAGES_MAPPED, ROOT_LANGUAGES_SORTED } from '$lib/languages';

	interface Props {
		supportedLanguages: LanguageCode[];
		recentLanguages: LanguageCode[];
		supportsAutoDetect?: boolean;
		chosenLanguage: LanguageCode;
		disallowedLanguage: LanguageCode;
		onSwap: () => void;
	}

	let {
		supportedLanguages,
		recentLanguages = $bindable(),
		supportsAutoDetect = false,
		chosenLanguage = $bindable(),
		disallowedLanguage,
		onSwap
	}: Props = $props();

	let showingLanguageList = $state(false);
	let interimChosenLanguage: LanguageCode | null = $state(null);
	let searchQuery = $state('');

	function chooseLanguage(lang: LanguageCode) {
		showingLanguageList = false;
		searchQuery = '';

		if (lang == chosenLanguage) {
			return; // no change
		}
		if (lang == disallowedLanguage) {
			onSwap();
			return;
		}

		chosenLanguage = lang;

		if (lang == LanguageCode.auto) {
			return; // don't add auto-detect to recent languages
		}
		if (recentLanguages.includes(lang)) {
			return; // already in the list, no need to update
		}

		// remove duplicates while preserving order
		const recentSet = new Set<LanguageCode>();

		recentSet.add(lang);
		if (disallowedLanguage != LanguageCode.auto) {
			recentSet.add(disallowedLanguage);
		}
		recentLanguages.forEach((l) => recentSet.add(l));

		recentLanguages = Array.from(recentSet).slice(0, 3);
	}
</script>

{#snippet languageButton(code: LanguageCode, disabled: boolean, onclick: () => void)}
	<button
		class="rounded-full px-4 py-2 text-left hover:bg-gray-3 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
		{disabled}
		{onclick}
	>
		{ALL_LANGUAGES_MAPPED[code].name}
	</button>
{/snippet}

<div class="relative">
	<div class="flex flex-row space-x-0.5 overflow-hidden rounded-full bg-gray-3 text-xs">
		{#if supportsAutoDetect}
			<button
				class="rounded-full px-6 py-2 focus:outline-none"
				class:bg-gray-5={chosenLanguage == LanguageCode.auto}
				class:hover:bg-gray-4={chosenLanguage != LanguageCode.auto}
				onclick={() => chooseLanguage(LanguageCode.auto)}
			>
				Auto
			</button>
		{/if}

		{#each recentLanguages as recentCode (recentCode)}
			<button
				class="shrink grow rounded-full p-2 focus:outline-none"
				class:bg-gray-5={chosenLanguage == recentCode}
				class:hover:bg-gray-4={chosenLanguage != recentCode}
				onclick={() => chooseLanguage(recentCode)}
			>
				{ALL_LANGUAGES_MAPPED[recentCode].name}
			</button>
		{/each}

		<button
			class="rounded-full p-2 focus:outline-none"
			class:bg-gray-5={showingLanguageList}
			class:hover:bg-gray-4={!showingLanguageList}
			onclick={() => (showingLanguageList = !showingLanguageList)}
		>
			{#if showingLanguageList}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m18 15-6-6-6 6" /></svg
				>
				<span class="sr-only">Close language menu.</span>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg
				>
				<span class="sr-only">More languages...</span>
			{/if}
		</button>
	</div>

	{#if showingLanguageList}
		<div
			class="absolute inset-x-0 top-full z-50 mt-1 overflow-hidden rounded-2xl bg-gray-2 text-xs shadow-lg"
		>
			<div class="max-h-[60vh] overflow-x-hidden overflow-y-auto p-2">
				{#if interimChosenLanguage == null}
					<div class="group relative">
						<input
							class="mb-0.5 block w-full rounded-full px-4 py-2 hover:bg-gray-3 focus:bg-gray-3 focus:outline-none"
							bind:value={searchQuery}
							placeholder="Search..."
						/>

						<div
							class="absolute inset-y-3 right-3 flex items-center justify-center text-gray-11 group-focus-within:text-gray-12 group-hover:text-gray-12"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="pointer-events-none h-4 w-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg
							>
						</div>
					</div>

					<div class="grid grid-cols-3 gap-0.5">
						{#each ROOT_LANGUAGES_SORTED as rootLang}
							{@const isSupported =
								supportedLanguages.includes(rootLang.code) ||
								rootLang.children.some((child) => supportedLanguages.includes(child.code))}

							{@const matchesSearch =
								rootLang.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
								rootLang.code.toLowerCase().startsWith(searchQuery.toLowerCase())}

							{#if rootLang.code != LanguageCode.auto && isSupported && matchesSearch}
								{@render languageButton(rootLang.code, false, () => {
									if (rootLang.children.length > 0) {
										interimChosenLanguage = rootLang.code;
									} else {
										chooseLanguage(rootLang.code);
									}
								})}
							{/if}
						{/each}
					</div>
				{:else}
					<button
						class="mb-0.5 block w-full rounded-full p-2 hover:bg-gray-3 disabled:pointer-events-none disabled:opacity-50"
						onclick={() => (interimChosenLanguage = null)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline-block h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg
						>
						Go back
					</button>

					<div class="grid grid-cols-2 gap-0.5">
						{#if supportedLanguages.includes(interimChosenLanguage)}
							{@render languageButton(
								interimChosenLanguage,
								chosenLanguage == interimChosenLanguage ||
									disallowedLanguage == interimChosenLanguage,
								() => chooseLanguage(interimChosenLanguage!)
							)}
						{/if}

						{#each ROOT_LANGUAGES_MAPPED[interimChosenLanguage!].children as child (child.code)}
							{#if supportedLanguages.includes(child.code)}
								{@render languageButton(
									child.code,
									chosenLanguage == child.code || disallowedLanguage == child.code,
									() => chooseLanguage(child.code)
								)}
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
