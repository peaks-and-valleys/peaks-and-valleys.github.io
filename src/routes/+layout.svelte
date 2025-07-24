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

<div class="wrapper">
	<div class="container">
		<header class="l-navList">
			<nav aria-label="メインナビゲーション">
				<ul>
					<li>
						<a href="/" aria-current={page.url.pathname === '/' ? 'page' : undefined}>home</a>
					</li>
					<li>
						<a
							href="/about"
							aria-current={page.url.pathname.startsWith('/about') ? 'true' : undefined}>about</a
						>
					</li>
					<li>
						<a
							href="/blog"
							aria-current={page.url.pathname.startsWith('/blog') ? 'true' : undefined}>blog</a
						>
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
			<section aria-label="サブナビゲーション">
				<ul>
					<li>
						<a href="/" aria-current={page.url.pathname === '/' ? 'page' : undefined}>home</a>
					</li>
					<li>
						<a
							href="/about"
							aria-current={page.url.pathname.startsWith('/about') ? 'true' : undefined}>about</a
						>
					</li>
					<li>
						<a
							href="/blog"
							aria-current={page.url.pathname.startsWith('/blog') ? 'true' : undefined}>blog</a
						>
					</li>
				</ul>
			</section>
			<section aria-label="フッター用リンクナビゲーション">
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
			</section>
		</footer>
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
	}

	.container {
		min-block-size: 100vh;
		inline-size: 100%;
		max-inline-size: 1280px;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-s);
	}

	main {
		flex: 1;
		border: solid 6px var(--c-secondary);
		margin-inline: var(--spacing-xs);
		padding-block-end: calc(var(--spacing-m) - var(--half-leading));
	}

	header {
		view-transition-name: header;
	}

	footer {
		view-transition-name: footer;
	}
</style>
