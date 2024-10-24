<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Peaks and Valleys - {data.items?.title}</title>
	<meta name="description" content={data.items?.description} />
</svelte:head>

<div class="main" role="main">
	<h1>{data.items?.title}</h1>
	<p>{data.items?.date}</p>
	<div class="content-box">
		{@html data.items?.content}
	</div>
</div>
