<script lang="ts">
	import type { PageData } from '../info/$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>info - Peaks and Valleys</title>
	<meta name="description" content="let me introduce myself" />
</svelte:head>

<main>
	<article>
		<h1>info</h1>
		<div class="content-box">
			{@html data.content}
		</div>
	</article>
</main>
