<script lang="ts">
	import type { PageData } from '../blog/$types';
	import HeadProperties from '$lib/components/head-properties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<HeadProperties pageTitle="ブログ" description="ブログ記事一覧"></HeadProperties>

<article class="p-articleContainer">
	<h1 class="p-articleContainer__heading u-rounded-border">ブログ</h1>
	{#each data.posts as post}
		<article>
			<a href="blog/post/{post.slug}">
				<hgroup class="p-article u-rounded-border">
					<h2>{post.title}</h2>
					<p>
						<time datetime={post.date}>{new Date(post.date).toLocaleDateString('ja')}</time> - {post.description}
					</p>
				</hgroup>
			</a>
		</article>
	{/each}
</article>
