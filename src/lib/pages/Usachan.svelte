<script lang="ts">
	import StampOnClick from '$lib/components/StampOnClick.svelte';
</script>

<StampOnClick stampImage="/images/index/usachan.svg">
	<div class="usachan">
		<img src="images/index/usachan.svg" alt="うさちゃん" />
	</div>
</StampOnClick>

<style lang="scss">
	.usachan {
		display: flex;
		min-block-size: 100%;
		align-items: center;
		justify-content: center;
		img {
			inline-size: max(240px, 40%);
		}
	}
</style>
