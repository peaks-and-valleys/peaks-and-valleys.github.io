<script lang="ts">
	import { page } from '$app/state';
</script>

<header>
	<h1>
		<a href="/" aria-current={page.url.pathname === '/' ? 'page' : undefined}>Peaks and Valleys</a>
	</h1>
	<nav aria-label="メインナビゲーション">
		<ul>
			<li>
				<a href="/blog" aria-current={page.url.pathname.startsWith('/blog') ? 'true' : undefined}
					>blog</a
				>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		row-gap: calc(var(--spacing-xs) - var(--half-leading));
		view-transition-name: header;

		h1 {
			margin-block-start: 0;
		}

		a {
			color: var(--c-primary);
			text-decoration: none;
		}

		nav ul li {
			list-style: none;
			margin: 0;
			font-size: 0.875rem;

			a {
				@media (any-hover) {
					&:hover {
						text-decoration: underline 2px currentColor;
					}
				}

				&[aria-current='true'] {
					text-decoration: underline 2px currentColor;
				}
			}
		}
	}
</style>
