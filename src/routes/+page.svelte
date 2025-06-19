<script lang="ts">
	import type { PageData } from '$types';
	import StampOnClick from '$lib/components/StampOnClick.svelte';
	import HeadProperties from '$lib/components/HeadProperties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<HeadProperties></HeadProperties>

<StampOnClick stampImage="/images/index/usachan.svg"></StampOnClick>

<div class="p-cover">
	<img class="p-cover__image" src="images/index/peaks-and-valleys.svg" alt="Peaks and Valleys" />
</div>
