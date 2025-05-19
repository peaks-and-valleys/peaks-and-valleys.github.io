<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/head-properties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<HeadProperties pageTitle="このサイトについて" description="このサイトについての説明"
></HeadProperties>

<article class="p-articleContainer">
	<h1>このサイトについて</h1>
	<p>いわゆる個人サイトです。</p>
	<h2>やっていること</h2>
	<h3>IT エンジニアリング</h3>
	<p>
		<a href="https://github.com/peaks-and-valleys" rel="me external noopener noreferrer"
			>GitHub プロフィール</a
		>
	</p>
	<p>
		必要になればだいたいなんでもやります（が、低レイヤには苦手意識があります…）。最近はフロントエンドやデザイン、UI/UX
		のことに興味があります。
	</p>
	<h3>グラフィックデザイン</h3>
	<p>
		<a
			href="https://www.behance.net/peaks-and-valleys"
			rel="me external noopener noreferrer"
			translate="no">Behance プロフィール</a
		>
	</p>
	<p>
		いろいろ手を出していますが、主にアブストラクトな表現を好みます。タイポグラフィーにも強い関心があって、よく無目的にフォントを漁って時間を溶かしたりしています。稀に動画も作ります。
	</p>
	<h3>文章</h3>
	<p>
		上記に関連したことや、それ以外の私的なことなどをブログに書いています。自身の言語化の練習のために書いているもので、読みづらいかもしれません。文体もいきなり常体になりますが、気にしないでください。
	</p>
	<p>
		また、文章を書き散らすための補助ツールとして <a
			href="https://scrapbox.io/peaks-and-valleys/"
			rel="me external noopener noreferrer">Cosense (Scrapbox)</a
		> を使っています。
	</p>
	<h2>連絡先</h2>
	<p></p>
	<address>
		<ul>
			<li>
				<a href="https://x.com/peaksvndvalleys" rel="me external noopener noreferrer">X</a> - 投稿はほとんどありませんが、DM
				は確認します。
			</li>
			<li>
				<a
					href="https://discordapp.com/users/1175713739148902421"
					rel="me external noopener noreferrer">Discord</a
				> - ユーザ名: peaks.and.valleys
			</li>
			<li>メールアドレス: peaksvndvalleys(at)protonmail(dot)com</li>
		</ul>
	</address>
</article>
