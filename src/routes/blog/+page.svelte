<script lang="ts">
	import type { PageData } from '../blog/$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>blog - Peaks and Valleys</title>
	<meta name="description" content="ブログ記事一覧" />
</svelte:head>

<article class="p-articles">
	<h1 class="p-articles__heading u-rounded-border">blog</h1>
	{#each data.posts as post}
		<article>
			<a href="blog/post/{post.slug}">
				<div class="p-article u-rounded-border">
					<h2>{post.title}</h2>
					<p><time datetime={post.date}>{new Date(post.date).toLocaleDateString('ja')}</time> - {post.description}</p>
				</div>
			</a>
		</article>
	{/each}
</article>
