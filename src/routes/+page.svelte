<script lang="ts">
	import StampOnClick from '$lib/components/StampOnClick.svelte';
	import HeadProperties from '$lib/components/HeadProperties.svelte';
</script>

<HeadProperties></HeadProperties>

<StampOnClick stampImage="/images/index/usachan.svg"></StampOnClick>

<div class="cover">
	<img src="images/index/usachan.svg" alt="うさちゃん" />
</div>

<style lang="scss">
	.cover {
		display: flex;
		min-block-size: 100%;
		align-items: center;
		justify-content: center;
		img {
			inline-size: max(240px, 40%);
			padding-inline: var(--spacing-xs);
		}
	}
</style>
