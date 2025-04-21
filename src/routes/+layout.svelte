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
	<nav class="l-headerMenu">
		<a href="/" class="l-headerMenu__link">index</a>
		<a href="/blog" class="l-headerMenu__link">blog</a>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<footer class="u-rounded-border">
	<p>
		<a href="/privacy-and-license">プライバシーとライセンス</a>
	</p>
	<address><p>Contact: peaksvndvalleys(at)protonmail(dot)com</p></address>
</footer>

<style>
</style>
