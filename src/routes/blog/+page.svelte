<script lang="ts">
	import type { PageData } from '../blog/$types';
	import HeadProperties from '$lib/components/head-properties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<HeadProperties pageTitle="ブログ" description="ブログ記事一覧"></HeadProperties>

<div class="p-articleContainer">
	<h1>ブログ</h1>
	<ul>
		{#each data.posts as post}
		<article class="p-articleList">
			<li>
					<hgroup>
						<h2><a href="blog/post/{post.slug}">{post.title}</a></h2>
						<p>
							<time datetime={post.date}>{new Date(post.date).toLocaleDateString('ja')}</time> - {post.description}
						</p>
					</hgroup>
			</li>
		</article>
		{/each}
	</ul>
</div>
