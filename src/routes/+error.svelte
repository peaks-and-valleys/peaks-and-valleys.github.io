<script lang="ts">
	import { page } from '$app/state';
	import HeadProperties from '$lib/components/HeadProperties.svelte';
</script>

<HeadProperties pageTitle={String(page.status)} />

<article class="l-articleContainer" role="status">
	<h1>{page.status}</h1>
	<p>{page.error?.message}</p>
	<button on:click={() => history.back()}>前のページに戻る</button>
</article>

<style lang="scss">
	button {
		margin-block-start: var(--spacing-s);
		font-size: 1rem;
		color: var(--bg-primary);
		background-color: var(--c-secondary);
		padding: var(--spacing-xxs);
		border: none;

		@media (any-hover) {
			&:hover {
				background-color: var(--c-accent-blue);
				@media (prefers-reduced-motion: no-preference) {
					transition: 200ms;
				}
			}
		}
	}
</style>
