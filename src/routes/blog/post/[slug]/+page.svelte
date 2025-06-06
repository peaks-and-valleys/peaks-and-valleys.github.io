<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';
	import HeadProperties from '$lib/components/head-properties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const { meta, isDraft } = data;

	let Content: Component = data.content;
</script>

<HeadProperties pageTitle={meta.title} description={meta.description} pageType="article"
></HeadProperties>

<div class="p-articleContainer">
	<article>
		<hgroup>
			<h1 class="">{meta.title}</h1>
			<p>
				<time datetime={meta.date}>{new Date(meta.date).toLocaleDateString('ja')}</time> - {meta.description}
			</p>
		</hgroup>
		<Content />
	</article>
</div>
