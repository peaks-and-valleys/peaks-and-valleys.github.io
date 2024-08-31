<script lang="ts">
</script>

<svelte:head>
	<title>Peaks and Valleys</title>
	<meta name="description" content="WIP" />
</svelte:head>

<div class="cover-image">
	<video class="cover-components" loop autoplay muted playsinline>
		<source src="/index/background_sq.mp4" type="video/mp4" media="(max-width: 1080px)" />
		<source src="/index/background_h.mp4" type="video/mp4" />
		<track kind="captions" />
	</video>
	<picture class="cover-components">
		<img src="/index/peaksandvalleys.svg" alt="Peaks and Valleys logo" />
	</picture>
</div>

<style>
	.cover-image {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		width: 100%;
	}
	.cover-components {
		grid-column: 1;
		grid-row: 1;
		display: flex;
		justify-content: center;
		width: 100%;
		flex-wrap: wrap;
	}
	.cover-components:nth-child(1) {
		z-index: 1;
	}
	.cover-components:nth-child(2) {
		z-index: 2;
		mix-blend-mode: difference;
		width: 62.5%;
		margin: auto;
	}
</style>
