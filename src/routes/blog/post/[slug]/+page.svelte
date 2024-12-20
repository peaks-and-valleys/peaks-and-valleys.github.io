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

<main>
	<article>
		<h1>{data.items?.title}</h1>
		<p class="description"><time>{data.items?.date}</time> - {data.items?.description}</p>
		<div class="content-box">
			{@html data.items?.content}
		</div>
	</article>
</main>
