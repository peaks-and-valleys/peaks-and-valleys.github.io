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

<main>
	<h1 class="heading">blog</h1>
	{#each data.items as item}
		<a href="blog/post/{item.slug}">
			<div class="c-content is-link">
				<h2>{item.title}</h2>
				<p><time>{item.date}</time> / {item.description}</p>
			</div>
		</a>
	{/each}
</main>
