<script lang="ts">
	import { LanguageCode } from '$lib/languages';
	import { ALL_LANGUAGES_MAPPED } from '$lib/languages';

	interface Props {
		language: LanguageCode;
		text: string;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
	}

	let {
		language,
		text = $bindable(),
		placeholder,
		disabled = false,
		readonly = false
	}: Props = $props();
</script>

<textarea
	bind:value={text}
	{placeholder}
	{disabled}
	{readonly}
	dir={ALL_LANGUAGES_MAPPED[language].direction}
	class:bg-gray-3={!readonly}
	class:bg-gray-2={readonly}
	class="text-md h-96 w-full resize-none rounded-2xl p-4 text-gray-12 not-read-only:hover:border-gray-2 focus:outline-none"
></textarea>
