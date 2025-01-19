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
	<nav>
		<a href="/">index</a>
		<a href="/blog">blog</a>
	</nav>
</header>

{@render children?.()}

<footer>
	<p>
		<a href="/terms-and-privacy">terms &amp; privacy</a>
	</p>
	<address><p>Contact: peaksvndvalleys(at)protonmail(dot)com</p></address>
</footer>

<style>
</style>
