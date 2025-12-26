<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@drop-in/graffiti';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<h1>Remote Blog</h1>

{@render children()}
