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
		padding-inline: 16px;
		padding-block: 16px;
		display: flex;
		justify-content: center;
		min-block-size: 100vh;
		min-block-size: 100dvh;
		@media screen and (min-width: 1024px) {
			padding-inline: 64px;
			justify-content: flex-start;
		}
	}

	.container {
		inline-size: min(100%, 896px); // 1024 - 64 * 2
		display: flex;
		flex-direction: column;
		gap: var(--spacing-m);
	}

	main {
		flex: 1;
	}
</style>
