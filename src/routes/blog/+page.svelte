<script lang="ts">
	import type { PageData } from '../blog/$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Peaks and Valleys - blog</title>
	<meta name="description" content="list of blog posts" />
</svelte:head>

<div class="main" role="main">
	<h1>blog</h1>
	{#each data.items as item}
		<a href="blog/post/{item.slug}">
			<div class="link-box">
				<h2>{item.title}</h2>
				<p>{item.date} | {item.description}</p>
			</div>
		</a>
	{/each}
</div>
