<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Peaks and Valleys - disclaimer</title>
    <meta name="description" content="disclaimer">
</svelte:head>

<main>
    <h1>disclaimer</h1>
    <div class="content-box">
		{@html data.content}
	</div>
</main>