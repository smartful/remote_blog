<script lang="ts">
	import { resolve } from '$app/paths';
	import { get_all_posts } from './posts.remote';

	// Query to get all posts
	const posts = await get_all_posts();
</script>

<!-- List all posts -->
<a class="button" href={resolve('/admin/post/new')}>New Post</a>

<ol>
	{#each posts as post (post.id)}
		<li>
			<a href={resolve(`/admin/post/${post.id}`)}>{post.title}</a>
		</li>
	{/each}
</ol>
