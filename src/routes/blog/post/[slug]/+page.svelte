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
		<hgroup>
			<h1 class="heading">{data.items?.title}</h1>
			<p style="text-align: center;"><time>{data.items?.date}</time> / {data.items?.description}</p>
		</hgroup>
		<div class="c-card">
			{@html data.items?.content}
		</div>
	</article>
</main>
