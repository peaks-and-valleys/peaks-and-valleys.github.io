<script lang="ts">
	import type { LayoutData } from './$types';
	import './styles/global.css';
	import Page from './+page.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<header>
	<nav class="navigation">
		<a href="/">home</a>
		<a href="/about">about</a>
		<a href="/blog">blog</a>
	</nav>
</header>

{@render children?.()}

<footer class="footer">
	<p>
		<a href="/disclaimer">disclaimer</a>
	</p>
	<p>
		SNS: <a href="https://x.com/peaksvndvalleys" target="_blank">X</a> /
		<a href="https://fedibird.com/@peaks" target="_blank">Fedibird</a>
	</p>
	<p>
		works: <a href="https://www.behance.net/peaks-and-valleys" target="_blank">Behance</a> /
		<a href="https://github.com/peaksvndvalleys" target="_blank">GitHub</a>
	</p>
	<p>
		articles: <a href="https://scrapbox.io/peaks-and-valleys/" target="_blank">Cosense</a> /
		<a href="https://zenn.dev/peaksandvalleys" target="_blank">Zenn</a>
	</p>
	<p>mail: peaksvndvalleys(at)protonmail(dot)com</p>
</footer>

<style>
</style>
