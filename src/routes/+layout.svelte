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
	<nav aria-label="メインナビゲーション">
		<ul class="c-navGrid">
			<a href="/"><li class="c-navGrid__link">home</li></a>
			<a href="/blog"><li class="c-navGrid__link">blog</li></a>
		</ul>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<footer class="u-rounded-border">
	<p>
		<a href="/privacy-and-license" rel="privacy-policy">プライバシーとライセンス</a>
	</p>
	<address><p>Contact: peaksvndvalleys(at)protonmail(dot)com</p></address>
</footer>

<style>
</style>
