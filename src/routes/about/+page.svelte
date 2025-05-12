<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/head-properties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<HeadProperties pageTitle="このサイトについて" description="このサイトについての説明"
></HeadProperties>

<article class="p-articleContainer">
	<h1>このサイトについて</h1>
	<p>
		いわゆる個人サイトです。グラフィックデザインや web
		のこと、私的などうでもいいことなどを書いたりします。
	</p>
	<em>ToDo: もうちょっとなんか書く</em>
</article>
