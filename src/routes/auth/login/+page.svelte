<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { authClient } from '$lib/auth-client';
	import { get_user } from '../../user.remote';

	let error = $state('');

	async function login(e: Event) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const email = form.email.value;
		const password = form.password.value;

		if (!email || !password) {
			error = 'All fields are required';
			return;
		}

		await authClient.signIn.email(
			{
				email,
				password
			},
			{
				onSuccess: async () => {
					get_user().refresh();
					goto(resolve('/'));
				}
			}
		);
	}
</script>

<div class="box">
	<h1>Login</h1>

	<form onsubmit={login}>
		<div class="row">
			<label for="email">
				Email:
				<input type="email" name="email" id="email" required />
			</label>
		</div>
		<div class="row">
			<label for="password">
				Password:
				<input type="password" name="password" id="password" required />
			</label>
		</div>

		{#if error}
			<p style:color="var(--red);">{error}</p>
		{/if}
		<button type="submit">Login</button>
	</form>
</div>

<p>
	Don't have an account? <a href={resolve('/auth/signup')}>Sign Up</a>
</p>
