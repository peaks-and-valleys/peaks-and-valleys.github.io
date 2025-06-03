import type { PageLoad } from './$types';
import { getPostBySlug } from '$lib/blog/posts';
import { error } from '@sveltejs/kit';

const articles = import.meta.glob('../*/content.svx');

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const postMeta = await getPostBySlug(slug);

	if (!postMeta) {
		throw error(404, { message: '記事が見つかりませんでした' });
	}

	const articleLoader = articles[`../${slug}/content.svx`];
	if (!articleLoader) {
		throw error(404, { message: '記事が見つかりませんでした' });
	}

	const postModule = await articleLoader();
	return {
		content: postModule.default,
		meta: postModule.metadata,
		isDraft: postMeta.draft
	};
};
