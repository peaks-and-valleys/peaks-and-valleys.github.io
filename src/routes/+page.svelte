<script lang="ts">
	import StampOnClick from '$lib/components/StampOnClick.svelte';
	import HeadProperties from '$lib/components/HeadProperties.svelte';
</script>

<HeadProperties></HeadProperties>

<StampOnClick stampImage="/images/index/usachan.svg"></StampOnClick>

<div class="cover">
	<img src="images/index/peaks-and-valleys.svg" alt="Peaks and Valleys" />
</div>

<style lang="scss">
	.cover {
		display: flex;
		min-height: 100%;
		align-items: center;
		img {
			width: 100%;
			margin-block-end: calc(var(--m-vertical) * 0.5);
		}
	}
</style>
