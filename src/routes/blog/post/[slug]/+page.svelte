<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';
	import { onMount } from 'svelte';
	import HeadProperties from '$lib/components/head-properties.svelte';

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

<HeadProperties pageTitle={meta.title} description={meta.description} pageType="article"
></HeadProperties>

<article class="p-articles">
	<hgroup>
		<h1 class="p-articles__heading u-rounded-border">{meta.title}</h1>
		<p style="text-align: center;">
			<time datetime={meta.date}>{new Date(meta.date).toLocaleDateString('ja')}</time> - {meta.description}
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
