<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@drop-in/graffiti';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="layout-readable center">
	{@render children()}
</main>
