<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
		<Header></Header>
		<main>
			{@render children?.()}
		</main>
		<Footer></Footer>
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding-inline: var(--spacing-m);
		padding-block-start: var(--spacing-xs);
		padding-block-end: var(--spacing-s);
		display: flex;
		justify-content: center;
		min-block-size: 100dvh;
	}

	.container {
		inline-size: min(100%, 960px);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-m);
	}

	main {
		flex: 1;
		border: solid 6px var(--c-secondary);
	}
</style>
