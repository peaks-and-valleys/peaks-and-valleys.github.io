<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { meta, isDraft } = data;

	let Content: Component;
	let contentLoaded = $state(false);

	onMount(() => {
		Content = data.content;
		contentLoaded = true;
	});
</script>

<svelte:head>
	<title>{meta.title} - Peaks and Valleys</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<article class="p-articles">
	<hgroup>
		<h1 class="p-articles__heading u-rounded-border">{meta.title}</h1>
		<p style="text-align: center;">
			<time datetime={meta.date}>{new Date(meta.date).toLocaleDateString('ja-JP')}</time> - {meta.description}
		</p>
	</hgroup>
	<article class="p-article u-rounded-border">
		{#if contentLoaded}
			<Content />
		{:else}
			<p>記事を読み込み中...</p>
		{/if}
	</article>
</article>
