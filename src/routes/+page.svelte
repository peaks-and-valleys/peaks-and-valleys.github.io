<script lang="ts">
	import type { PageData } from '$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Peaks and Valleys</title>
	<meta name="description" content="底が見えるほど深く、手が届くほど広い" />
</svelte:head>

<div class="p-cover">
	<video class="p-cover__image" loop autoplay muted playsinline>
		<source src="images/index/background.mp4" type="video/mp4" />
		<track kind="captions" />
	</video>
	<img
		class="p-cover__image"
		src="images/index/peaksandvalleys.svg"
		alt="Peaks and Valleys と手書き風文字で書かれたロゴです"
	/>
</div>
<article class="p-articles">
	<article>
		<p style="text-align: center;">
			<a href="https://www.behance.net/peaks-and-valleys" rel="me">Behance</a> /
			<a href="https://scrapbox.io/peaks-and-valleys/" rel="me">Cosense</a> /
			<a href="https://github.com/peaksvndvalleys" rel="me">GitHub</a>
		</p>
	</article>
</article>
