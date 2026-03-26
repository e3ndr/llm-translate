<script lang="ts">
	import '$lib/client/css/fonts.css';
	import '$lib/client/css/tailwind.css';
	import '$lib/client/css/app.css';

	let { children } = $props();
</script>

{@render children()}
