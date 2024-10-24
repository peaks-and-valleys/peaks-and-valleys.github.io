<script lang="ts">
	import type { PageData } from '../about/$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Peaks and Valleys - about</title>
	<meta name="description" content="let me introduce myself" />
</svelte:head>

<div class="main" role="main">
	<h1>about</h1>
	<div class="content-box">
		{@html data.content}
	</div>
</div>
