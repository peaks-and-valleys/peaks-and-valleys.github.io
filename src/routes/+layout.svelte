<script lang="ts">
	import type { LayoutData } from './$types';
	import Page from './+page.svelte';
	import { page } from '$app/state';
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

<header class="l-navList">
	<nav aria-label="メインナビゲーション">
		<ul class="">
			<li class="">
				<a href="/" aria-current={page.url.pathname === '/'}>home</a>
			</li>
			<li class="">
				<a href="/blog" aria-current={page.url.pathname === '/blog'}>blog</a>
			</li>
		</ul>
	</nav>
	<nav class="u-rounded-border" aria-label="リンクナビゲーション">
		<ul class="">
			<li class="">
				<a href="https://www.behance.net/peaks-and-valleys" rel="external me">Behance</a>
			</li>
			<li class="">
				<a href="https://github.com/peaks-and-valleys" rel="external me">GitHub</a>
			</li>
		</ul>
	</nav>
</header>

<main>
	{@render children?.()}
</main>

<footer class="l-navList l-navList--sub">
	<nav aria-label="メインナビゲーション">
		<ul>
			<li>
				<a href="/" aria-current={page.url.pathname === '/'}>home</a>
			</li>
			<li >
				<a href="/blog" aria-current={page.url.pathname === '/blog'}>blog</a>
			</li>
		</ul>
	</nav>
	<nav aria-label="リンクナビゲーション">
		<ul>
			<li>
				<a href="https://www.behance.net/peaks-and-valleys" rel="external me">Behance</a>
			</li>
			<li>
				<a href="https://github.com/peaks-and-valleys" rel="external me">GitHub</a>
			</li>
			<li>
				<address>Contact: peaksvndvalleys(at)protonmail(dot)com</address>
			</li>
		</ul>
	</nav>
</footer>
