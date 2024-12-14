<script lang="ts">
	import type { PageData } from '../disclaimer/$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>terms and privacy - Peaks and Valleys</title>
	<meta name="description" content="terms and privacy" />
</svelte:head>

<main>
	<article>
		<h1>terms &amp; privacy</h1>
		<div class="content-box">
			{@html data.content}
		</div>
	</article>
</main>
