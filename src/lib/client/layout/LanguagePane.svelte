<script lang="ts">
	import type { LanguageCode } from '$lib/languages';
	import { ALL_LANGUAGES_MAPPED, ROOT_LANGUAGES_SORTED } from '$lib/languages';

	interface Props {
		supportedLanguages: LanguageCode[];
		text: string;
		placeholder?: string;
		disabled?: boolean;
		disableLanguage?: boolean;
		chosenLanguage: LanguageCode;
		disallowedLanguage?: LanguageCode;
	}

	let {
		supportedLanguages,
		disableLanguage = false,
		text = $bindable(),
		chosenLanguage = $bindable(),
		disallowedLanguage,
		placeholder,
		disabled = false
	}: Props = $props();
</script>

<div class="flex h-full flex-col space-y-8">
	<div>
		{#if disableLanguage}
			<div
				class="flex h-full w-full items-center rounded-lg border border-sand-4 bg-sand-2 px-2 py-2 text-xs text-sand-11 select-none"
				style:block-size="36px"
			>
				<span>Auto Detect</span>
			</div>
		{:else}
			<select
				class="h-full w-full rounded-lg border border-sand-4 bg-sand-2 px-1 py-2 text-xs text-sand-12 hover:bg-sand-3 focus:ring-2 focus:ring-orange-7 focus:outline-none"
				bind:value={chosenLanguage}
			>
				{#each ROOT_LANGUAGES_SORTED as rootLang}
					<optgroup label={rootLang.name}>
						{#if supportedLanguages.includes(rootLang.code)}
							<option disabled={rootLang.code == disallowedLanguage} value={rootLang.code}>
								{rootLang.name}
							</option>
						{/if}

						{#each rootLang.children as lang}
							{#if supportedLanguages.includes(lang.code)}
								<option disabled={lang.code == disallowedLanguage} value={lang.code}>
									{lang.name}
								</option>
							{/if}
						{/each}
					</optgroup>
				{/each}
			</select>
		{/if}
	</div>

	<textarea
		bind:value={text}
		{placeholder}
		{disabled}
		dir={disableLanguage ? 'auto' : ALL_LANGUAGES_MAPPED[chosenLanguage].direction}
		class="h-full w-full resize-none rounded-lg border border-sand-4 bg-sand-2 p-2 text-xs text-sand-12 hover:border-sand-6 focus:ring-2 focus:ring-orange-7 focus:outline-none"
	></textarea>
</div>
