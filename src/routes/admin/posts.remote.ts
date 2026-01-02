import { form, getRequestEvent, query } from '$app/server';
import { error, redirect } from '@sveltejs/kit';
import * as v from 'valibot';
import { db } from '$lib/server/db';
import { auth } from '$lib/auth';
import { post } from '$lib/server/db/schema';

export const get_all_posts = query(async () => db.query.post.findMany());

export const create_post = form(
	v.object({
		title: v.pipe(v.string(), v.nonEmpty('Title is required')),
		body: v.pipe(v.string(), v.nonEmpty())
	}),
	async ({ title, body }) => {
		const event = getRequestEvent();
		const session = await auth.api.getSession({
			headers: event.request.headers
		});

		if (!session?.user.id) {
			error(401, 'Unauthorized');
		}

		const slug = title.toLowerCase().replace(/ /g, '-');
		await db.insert(post).values({
			title,
			slug,
			body,
			authorId: session.user.id
		});
		redirect(303, '/admin');
	}
);
