<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@drop-in/graffiti';
	import './style.css';
	import { resolve } from '$app/paths';
	import { get_user } from './user.remote';
	import { authClient } from '$lib/auth-client';
	import { goto, onNavigate } from '$app/navigation';

	let { children } = $props();

	const user = $derived(await get_user());

	function logout() {
		authClient.signOut({
			fetchOptions: {
				onSuccess: async () => {
					await get_user().refresh();
					goto(resolve('/auth/login'));
				}
			}
		});
	}

	onNavigate((navigate) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigate.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div class="layout-readable center split">
		<a href={resolve('/')}>Blog</a>
		{#if user.id}
			<button onclick={logout}>Logout</button>
		{/if}
	</div>
</header>

<main class="layout-readable center">
	{@render children()}
</main>

<style>
	header {
		border-bottom: solid 1px var(--white-3);
		padding-block: var(--vs-s);
		.layout-readable {
			align-items: center;
		}
	}

	main {
		padding-block: var(--vs-m);
	}
</style>
