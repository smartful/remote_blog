<script lang="ts">
	import { get_all_posts } from './posts.remote';

	// Query to get all posts
	const posts = await get_all_posts();
</script>

<!-- List all posts -->
<ol>
	{#each posts as post (post.id)}
		<li>{post.title}</li>
	{/each}
</ol>
