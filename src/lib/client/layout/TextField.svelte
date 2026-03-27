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

<div
	class="h-full overflow-hidden rounded-2xl md:h-fit"
	class:bg-gray-3={!readonly}
	class:bg-gray-2={readonly}
>
	<textarea
		bind:value={text}
		{placeholder}
		{disabled}
		{readonly}
		dir={ALL_LANGUAGES_MAPPED[language].direction}
		class="text-md h-full w-full resize-none px-4 pt-4 text-gray-12 focus:outline-none md:h-96"
	></textarea>

	<div class="px-4 py-1 text-sm text-gray-10 select-none">
		<!-- svelte-ignore slot_element_deprecated -->
		<slot />
	</div>
</div>
