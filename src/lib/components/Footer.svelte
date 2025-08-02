<footer>
	<nav aria-label="リンクナビゲーション">
		<ul>
			<li>
				<a
					href="https://github.com/peaks-and-valleys"
					rel="external me noopener noreferrer"
					translate="no">GitHub</a
				>
			</li>
			<li>
				<a
					href="https://www.behance.net/peaks-and-valleys"
					rel="external me noopener noreferrer"
					translate="no">Behance</a
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
	<span class="sub-text">
		<address>Contact: peaksvndvalleys (at) protonmail (dot) com</address>
	</span>
</footer>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: column;
		row-gap: calc(var(--spacing-xs) - var(--half-leading));
		color: var(--c-secondary);
		align-items: center;
		view-transition-name: footer;

		nav {
			ul {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				column-gap: var(--spacing-m);

				li {
					list-style: none;
					margin-inline-start: 0;
					margin-block-start: 0;
				}
			}
			a {
				color: var(--c-secondary);
				text-decoration: none;

				@media (any-hover) {
					&:hover {
						color: var(--c-accent-blue);
						text-decoration: underline 2px currentColor;
					}
				}
			}
		}

		.sub-text {
			font-size: 0.75rem;
		}
	}
</style>
