<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { authClient } from '$lib/auth-client';

	let error = $state('');

	async function signup(e: Event) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const username = form.username.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPass = form.confirmPass.value;

		if (password !== confirmPass) {
			error = "Password don't match";
			return;
		}

		if (!username || !email || !password || !confirmPass) {
			error = 'All fields are required';
			return;
		}

		await authClient.signUp.email(
			{
				email,
				password,
				name: username
			},
			{
				onSuccess: async () => {
					goto(resolve('/'));
				}
			}
		);
	}
</script>

<div class="box">
	<h1>Sign Up</h1>

	<form onsubmit={signup}>
		<div class="row">
			<label for="username">
				Username:
				<input type="text" name="username" id="username" required />
			</label>
		</div>
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
		<div class="row">
			<label for="confirmPass">
				Confirm Password:
				<input type="password" name="confirmPass" id="confirmPass" required />
			</label>
		</div>
		{#if error}
			<p style:color="var(--red);">{error}</p>
		{/if}
		<button type="submit">Sign Up</button>
	</form>
</div>
