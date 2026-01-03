import { db } from '$lib/server/db';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals, url }) => {
	const posts = await db.query.post.findMany();
	return json(posts);
};
