<script lang="ts">
	import type { PageData } from '../about/$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Peaks and Valleys - about</title>
	<meta name="description" content="let me introduce myself" />
</svelte:head>

<main>
	<h1>about</h1>
	<div class="content-box">
		{@html data.content}
	</div>
</main>
