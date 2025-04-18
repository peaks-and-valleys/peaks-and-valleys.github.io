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
	{#each data.items as item}
		<article>
			<a href="blog/post/{item.slug}">
				<div class="p-article u-rounded-border">
					<h2>{item.title}</h2>
					<p><time>{item.date}</time> / {item.description}</p>
				</div>
			</a>
		</article>
	{/each}
</article>
