<script lang="ts">
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
						<a href="/about" aria-current={page.url.pathname === '/about'}>about</a>
					</li>
					<li>
						<a href="/blog" aria-current={page.url.pathname === '/blog'}>blog</a>
					</li>
				</ul>
			</nav>
			<nav aria-label="リンクナビゲーション">
				<ul>
					<li>
						<a
							href="https://www.behance.net/peaks-and-valleys"
							rel="external me noopener noreferrer"
							translate="no">Behance</a
						>
					</li>
					<li>
						<a
							href="https://github.com/peaks-and-valleys"
							rel="external me noopener noreferrer"
							translate="no">GitHub</a
						>
					</li>
					<li>
						<a
							href="https://scrapbox.io/peaks-and-valleys/"
							rel="external me noopener noreferrer"
							translate="no">Cosense</a
						>
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
						<a href="/about" aria-current={page.url.pathname === '/about'}>about</a>
					</li>
					<li>
						<a href="/blog" aria-current={page.url.pathname === '/blog'}>blog</a>
					</li>
				</ul>
			</nav>
			<nav aria-label="フッター用リンクナビゲーション">
				<ul>
					<li>
						<a
							href="https://www.behance.net/peaks-and-valleys"
							rel="external me noopener noreferrer"
							translate="no">Behance</a
						>
					</li>
					<li>
						<a
							href="https://github.com/peaks-and-valleys"
							rel="external me noopener noreferrer"
							translate="no">GitHub</a
						>
					</li>
					<li>
						<a
							href="https://scrapbox.io/peaks-and-valleys/"
							rel="external me noopener noreferrer"
							translate="no">Cosense</a
						>
					</li>
					<li><address>peaksvndvalleys(at)protonmail(dot)com</address></li>
				</ul>
			</nav>
		</footer>
	</div>
</div>
