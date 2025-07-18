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
	export let effectiveSize: string = '96px';

	export let enabled: boolean = true; // スタンプ機能の有効/無効
	export let maxStamps: number = 20; // 最大表示数

	// 状態管理
	let stamps: StampItem[] = [];
	let nextId: number = 0;

	function handleClick(event: MouseEvent): void {
		if (!enabled) return;

		const x = event.clientX;
		const y = event.clientY;

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
			document.addEventListener('click', handleClick);
		}
	});

	// enabled プロパティが変更されたとき
	$: {
		if (typeof document !== 'undefined') {
			if (enabled) {
				document.addEventListener('click', handleClick);
			} else {
				document.removeEventListener('click', handleClick);
			}
		}
	}

	onDestroy(() => {
		// コンポーネントのクリーンアップ時にイベントリスナーを削除
		if (typeof document !== 'undefined') {
			document.removeEventListener('click', handleClick);
		}
		stamps = [];
	});
</script>

<!-- 固定位置の透明なオーバーレイ -->
<div class="stamp-overlay" aria-hidden="true">
	{#each stamps as stamp (stamp.id)}
		<div
			class="stamp"
			class:invisible={!stamp.visible}
			style="left: {stamp.x}px; top: {stamp.y}px;  width: {effectiveSize}; height: {effectiveSize};z-index: {1000 +
				stamp.id}; transition: opacity {fadeOutDuration}ms ease-out;"
		>
			<img src={stampImage} alt="" />
		</div>
	{/each}
</div>

<!-- 非表示でも slot はレンダリング -->
<div style="display: contents;">
	<slot></slot>
</div>

<style>
	.stamp-overlay {
		position: fixed;
		inset-block-start: 0;
		inset-inline-start: 0;
		inline-size: 100%;
		block-size: 100%;
		pointer-events: none; /* クリックを通過させる */
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
