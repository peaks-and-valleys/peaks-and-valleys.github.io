<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.items?.title} - Peaks and Valleys</title>
	<meta name="description" content={data.items?.description} />
</svelte:head>

<article class="p-articles">
	<hgroup>
		<h1 class="p-articles__heading">{data.items?.title}</h1>
		<p style="text-align: center;"><time>{data.items?.date}</time> / {data.items?.description}</p>
	</hgroup>
	<article class="p-article">
		{@html data.items?.content}
	</article>
</article>
