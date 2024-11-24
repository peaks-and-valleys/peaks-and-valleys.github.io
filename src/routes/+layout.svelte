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
		<a href="/info">info</a>
		<a href="/blog">blog</a>
	</nav>
</header>

{@render children?.()}

<footer class="footer">
	<p>
		<a href="/disclaimer">disclaimer</a>
	</p>
	<address>
		Contact: <a href="https://x.com/peaksvndvalleys" target="_blank" rel="me">X</a> or peaksvndvalleys(at)protonmail(dot)com
	</address>
</footer>

<style>
</style>
