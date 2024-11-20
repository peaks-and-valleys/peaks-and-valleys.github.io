<script lang="ts">
</script>

<svelte:head>
	<title>Peaks and Valleys</title>
	<meta name="description" content="底が見えるほど深く、手が届くほど広い" />
</svelte:head>

<div class="cover-image" role="main">
	<video class="cover-component" loop autoplay muted playsinline>
		<source src="images/index/background.mp4" type="video/mp4" />
		<track kind="captions" />
	</video>
	<img
		class="cover-component"
		src="images/index/peaksandvalleys.svg"
		alt="Peaks and Valleys と手書き風文字で書かれたロゴです"
	/>
</div>

<style>
	.cover-image {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		width: 100%;
	}
	.cover-component {
		grid-column: 1;
		grid-row: 1;
		display: flex;
		justify-content: center;
		width: 100%;
		flex-wrap: wrap;
	}
	.cover-component:nth-child(1) {
		z-index: 1;
		width: 100%;
	}
	.cover-component:nth-child(2) {
		z-index: 2;
		mix-blend-mode: difference;
		width: 100%;
		margin: auto;
	}
</style>
