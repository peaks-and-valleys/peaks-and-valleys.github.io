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

<div class="l-globalWrapper">
	<div class="l-mainContentWrapper">
		<header class="l-navList">
			<nav aria-label="メインナビゲーション">
				<ul>
					<li>
						<a href="/" aria-current={page.url.pathname === '/'}>home</a>
					</li>
					<li>
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
						<a href="https://codepen.io/peaks-and-valleys" rel="external me">CodePen</a>
					</li>
					<li>
						<a href="https://scrapbox.io/peaks-and-valleys/" rel="external me">Cosense</a>
					</li>
					<li>
						<a href="https://x.com/peaksvndvalleys" rel="external me">X</a>
					</li>
				</ul>
			</nav>
		</header>

		<main>
			{@render children?.()}
		</main>

		<footer class="l-navList l-navList--bottom">
			<nav aria-label="サブナビゲーション">
				<ul>
					<li>
						<a href="/" aria-current={page.url.pathname === '/'}>home</a>
					</li>
					<li>
						<a href="/blog" aria-current={page.url.pathname === '/blog'}>blog</a>
					</li>
					<li>
						<a
							href="/privacy-and-license"
							rel="privacy-policy"
							aria-current={page.url.pathname === '/privacy-and-license'}>privacy & license</a
						>
					</li>
				</ul>
			</nav>
			<nav aria-label="フッター用リンクナビゲーション">
				<ul>
					<li>
						<a href="https://www.behance.net/peaks-and-valleys" rel="external me">Behance</a>
					</li>
					<li>
						<a href="https://github.com/peaks-and-valleys" rel="external me">GitHub</a>
					</li>
					<li>
						<a href="https://codepen.io/peaks-and-valleys" rel="external me">CodePen</a>
					</li>
					<li>
						<a href="https://scrapbox.io/peaks-and-valleys/" rel="external me">Cosense</a>
					</li>
					<li>
						<a href="https://x.com/peaksvndvalleys" rel="external me">X</a>
					</li>
					<li><address>peaksvndvalleys(at)protonmail(dot)com</address></li>
				</ul>
			</nav>
		</footer>
	</div>
</div>
