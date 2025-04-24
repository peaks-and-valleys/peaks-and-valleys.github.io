import type { PageLoad } from './$types';
import { getPostBySlug } from '$lib/blog/posts';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const { slug } = params;

		// スラッグに対応する記事のメタデータを取得
		const postMeta = await getPostBySlug(slug);

		if (!postMeta) {
			throw error(404, { message: '記事が見つかりませんでした' });
		}

		// 実際の記事内容を動的インポート（これはキャッシュされない）
		const postModule = await import(`../${slug}/content.svx`);

		return {
			content: postModule.default,
			meta: postModule.metadata,
			isDraft: postMeta.draft
		};
	} catch (err) {
		console.error(`記事の読み込みエラー:`, err);
		throw error(404, { message: '記事が見つかりませんでした' });
	}
};
