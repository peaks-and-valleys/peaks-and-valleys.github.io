<script lang="ts">
	import StampOnClick from '$lib/components/StampOnClick.svelte';
</script>

<StampOnClick stampImage="/images/index/usachan.svg">
	<div class="wrapper">
		<div class="usachan">
			<img src="images/index/usachan.svg" alt="うさちゃん" />
		</div>
	</div>
</StampOnClick>

<style lang="scss">
	.wrapper {
		padding-block-start: var(--spacing-l);
		block-size: 100%;
	}
	.usachan {
		display: flex;
		min-block-size: 100%;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-l);
		border: 4px solid var(--c-secondary);
		img {
			inline-size: max(240px, 40%);
		}
	}
</style>
