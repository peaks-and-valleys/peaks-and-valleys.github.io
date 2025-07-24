import { dev } from '$app/environment';
import type { Post, PostModule } from './types';

// キャッシュ
let postsCache: Post[] | null = null;
let lastCacheTime = 0;
const CACHE_DURATION = dev ? 5000 : 60000 * 10; // 開発中は5秒、本番は10分

/**
 * 全記事データを取得する関数
 */
export async function getAllPosts(): Promise<Post[]> {
	const now = Date.now();

	// キャッシュが有効ならそれを返す
	if (postsCache && now - lastCacheTime < CACHE_DURATION) {
		return postsCache;
	}

	// 記事データを読み込む
	const postFiles = import.meta.glob<PostModule>('../../routes/blog/\\(post\\)/*/content.svx', {
		eager: true
	});
	const posts: Post[] = [];

	for (const path in postFiles) {
		const file = postFiles[path];
		const slug = path.split('/').at(-2) as string;

		if (file && file.metadata) {
			const { title, date, description, draft } = file.metadata;

			// 必須フィールドの整合性チェック
			if (!title || !date) {
				console.warn(`記事 ${slug} にタイトルまたは日付がありません`);
				continue;
			}

			posts.push({
				slug,
				title,
				date,
				description: description || '説明なし',
				draft: draft === 'true'
			});
		}
	}

	// 日付順にソート（新しい順）
	posts.sort((a, b) => b.date.localeCompare(a.date));

	// キャッシュを更新
	postsCache = posts;
	lastCacheTime = now;

	return posts;
}

/**
 * 公開記事のみを取得
 */
export async function getPublishedPosts(): Promise<Post[]> {
	const allPosts = await getAllPosts();
	return allPosts.filter((post) => !post.draft);
}

/**
 * スラッグから記事を取得
 */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
	// スラッグのサニタイズ（安全でない文字を除去）
	const safeSlug = slug.replace(/[^a-z0-9-]/gi, '');

	if (safeSlug !== slug) {
		console.error('安全でないスラグが検出されました:', slug);
		return undefined;
	}

	const allPosts = await getAllPosts();
	return allPosts.find((post) => post.slug === slug);
}
