<script lang="ts">
	import type { LayoutData } from './$types';
	import Page from './+page.svelte';
	import './styles/app.scss';
	interface Props {
		children?: import('svelte').Snippet;
	}

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children }: Props = $props();
</script>

<header>
	<nav>
		<a href="/">index</a>
		<a href="/blog">blog</a>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<footer>
	<p>
		<a href="/privacy-and-license">プライバシーとライセンス</a>
	</p>
	<address><p>Contact: peaksvndvalleys(at)protonmail(dot)com</p></address>
</footer>

<style>
</style>
