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
					href="https://zenn.dev/peaksandvalleys"
					rel="external me noopener noreferrer"
					translate="no"
				>
					Zenn
				</a>
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
		margin-block-start: var(--spacing-l);
		padding-block-start: calc(var(--spacing-m) - var(--half-leading));
		border-block-start: 1px dotted var(--c-secondary);
		display: flex;
		flex-direction: column;
		row-gap: calc(var(--spacing-xs) - var(--half-leading));
		color: var(--c-secondary);
		view-transition-name: footer;

		nav {
			ul {
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				column-gap: var(--spacing-m);

				li {
					list-style: none;
					margin-inline-start: 0;
					margin-block-start: 0;
				}
			}
			a {
				text-decoration: none;
				@media (any-hover) {
					&:hover {
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
