<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@drop-in/graffiti';
	import './style.css';
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div class="layout-readable center">
		<a href={resolve('/')}>Blog</a>
	</div>
</header>

<main class="layout-readable center">
	{@render children()}
</main>

<style>
	header {
		border-bottom: solid 1px var(--white-3);
	}
</style>
