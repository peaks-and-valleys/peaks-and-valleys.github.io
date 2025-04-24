import { getPublishedPosts } from '$lib/blog/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getPublishedPosts();

	return {
		posts
	};
};
