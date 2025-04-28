<script lang="ts">
	import type { PageData } from '$types';
	import StampOnClick from '$lib/components/stamp-on-click.svelte';
	import HeadProperties from '$lib/components/head-properties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<HeadProperties></HeadProperties>

<StampOnClick stampImage="/images/index/usachan.svg"></StampOnClick>

<div class="p-cover">
	<video class="p-cover__image u-rounded-border" loop autoplay muted playsinline>
		<source src="images/index/background.webm" type="video/webm" />
		<track kind="captions" />
	</video>
	<img
		class="p-cover__image"
		src="images/index/peaks-and-valleys.svg"
		alt="Peaks and Valleys のロゴ。山と谷を象徴するシンプルなデザイン。"
	/>
</div>

<article class="p-articleContainer">
	<nav class="c-navGrid" aria-label="外部リンクへのナビゲーション">
		<a href="https://www.behance.net/peaks-and-valleys" rel="me" class="c-navGrid__link">Behance</a
		>
		<a href="https://scrapbox.io/peaks-and-valleys/" rel="me" class="c-navGrid__link">Cosense</a>
		<a href="https://github.com/peaks-and-valleys" rel="me" class="c-navGrid__link">GitHub</a>
	</nav>
</article>
