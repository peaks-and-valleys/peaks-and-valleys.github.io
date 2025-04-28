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
	<h1 class="p-articleContainer__heading c-faceAttached u-rounded-border" lang="en-US">
		ALL YOU WANT TO ACCESS
	</h1>
	<nav aria-label="外部リンクへのナビゲーション">
		<ul class="c-navGrid">
			<a href="https://www.behance.net/peaks-and-valleys" rel="external me"
				><li class="c-navGrid__link" translate="no">Behance</li></a
			>
			<a href="https://scrapbox.io/peaks-and-valleys/" rel="external me"
				><li class="c-navGrid__link" translate="no">Cosense</li></a
			>
			<a href="https://github.com/peaks-and-valleys" rel="external me" 
				><li class="c-navGrid__link" translate="no">GitHub</li></a
			>
		</ul>
	</nav>
</article>
