<script lang="ts">
	import { authClient } from '$lib/auth-client';
</script>

<h1>Sign Up</h1>

<form>
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
	<button type="submit">Sign Up</button>
</form>
