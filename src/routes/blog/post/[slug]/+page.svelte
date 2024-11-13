<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Peaks and Valleys - {data.items?.title}</title>
	<meta name="description" content={data.items?.description} />
</svelte:head>

<main>
	<h1>{data.items?.title}</h1>
	<p>{data.items?.date}</p>
	<div class="content-box">
		{@html data.items?.content}
	</div>
</main>
