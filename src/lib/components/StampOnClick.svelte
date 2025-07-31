<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	// 型定義
	type StampItem = {
		id: number;
		x: number;
		y: number;
		visible: boolean;
		timestamp: number;
	};

	// プロパティ
	export let stampImage: string; // スタンプ画像のURL
	export let duration: number = 2000; // 表示時間（ミリ秒）
	export let fadeOutDuration: number = 1000; // フェードアウト時間（ミリ秒）

	// サイズを文字列として受け取る
	export let effectiveSize: string = '108px';

	// コンポーネントのルート要素への参照
	let containerRef: HTMLDivElement;

	export let enabled: boolean = true; // スタンプ機能の有効/無効
	export let maxStamps: number = 20; // 最大表示数

	// 状態管理
	let stamps: StampItem[] = [];
	let nextId: number = 0;

	function handleClick(event: MouseEvent): void {
		if (!enabled) return;

		// クリック位置を親要素からの相対位置で計算
		const rect = containerRef.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const newStamp: StampItem = {
			id: nextId,
			x,
			y,
			visible: true,
			timestamp: Date.now()
		};

		// 最大表示数の制限
		if (stamps.length >= maxStamps) {
			stamps = stamps.slice(1);
		}

		stamps = [...stamps, newStamp];
		nextId++;

		// 指定時間後にスタンプを消す
		setTimeout(() => {
			stamps = stamps.map((stamp) =>
				stamp.id === newStamp.id ? { ...stamp, visible: false } : stamp
			);

			// アニメーション完了後に配列から完全に削除
			setTimeout(() => {
				stamps = stamps.filter((stamp) => stamp.id !== newStamp.id);
			}, 1000); // CSSアニメーションの時間
		}, duration);
	}

	// イベントリスナーの登録・解除
	onMount(() => {
		if (enabled) {
			containerRef.addEventListener('click', handleClick);
		}
	});

	// enabled プロパティが変更されたとき
	$: {
		if (containerRef) {
			if (enabled) {
				containerRef.addEventListener('click', handleClick);
			} else {
				containerRef.removeEventListener('click', handleClick);
			}
		}
	}

	onDestroy(() => {
		if (containerRef) {
			containerRef.removeEventListener('click', handleClick);
		}
		stamps = [];
	});
</script>

<!-- コンポーネントのルート要素 -->
<div class="stamp-container" bind:this={containerRef}>
	<!-- スタンプ表示用のオーバーレイ -->
	<div class="stamp-overlay" aria-hidden="true">
		{#each stamps as stamp (stamp.id)}
			<div
				class="stamp"
				class:invisible={!stamp.visible}
				style="left: {stamp.x}px; top: {stamp.y}px; width: {effectiveSize}; height: {effectiveSize}; z-index: {1000 +
					stamp.id}; transition: opacity {fadeOutDuration}ms ease-out;"
			>
				<img src={stampImage} alt="" />
			</div>
		{/each}
	</div>

	<!-- コンテンツスロット -->
	<div style="display: contents;">
		<slot></slot>
	</div>
</div>

<style>
	.stamp-container {
		position: relative;
		block-size: 100%;
		inline-size: 100%;
		overflow: hidden;
	}

	.stamp-overlay {
		position: absolute;
		inset-block-start: 0;
		inset-inline-start: 0;
		inline-size: 100%;
		block-size: 100%;
		pointer-events: none;
		z-index: 1000;
	}

	.stamp {
		position: absolute;
		transform: translate(-50%, -50%);
		pointer-events: none;
		opacity: 1;
	}

	.stamp img {
		inline-size: 100%;
		block-size: 100%;
		object-fit: contain;
	}

	.invisible {
		opacity: 0;
	}
</style>
