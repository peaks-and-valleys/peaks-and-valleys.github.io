<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/HeadProperties.svelte';
</script>

<HeadProperties pageTitle="このサイトについて" description="このサイトについての説明"
></HeadProperties>

<article class="l-articleContainer">
	<h1>このサイトについて</h1>
	<p>いわゆる個人サイトです。</p>
	<h2>やっていること</h2>
	<ul>
		<li>
			IT エンジニアリング - <a
				href="https://github.com/peaks-and-valleys"
				rel="me external noopener noreferrer">GitHub</a
			>
		</li>
		<li>
			グラフィックデザイン - <a
				href="https://www.behance.net/peaks-and-valleys"
				rel="me external noopener noreferrer"
				translate="no">Behance</a
			>
		</li>
		<li>
			文章 - <a href="https://scrapbox.io/peaks-and-valleys/" rel="me external noopener noreferrer"
				>Cosense (Scrapbox)</a
			>
		</li>
	</ul>
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
	<h2>その他告知事項</h2>
	<h3>プライバシー</h3>
	<ul>
		<li>
			当サイトでは、サードパーティ Cookie
			やフィンガープリントなど、個人を特定し得る手法を使ったアクセス解析は実施していません。
		</li>
		<li>広告やアフィリエイトリンクなどもありません。</li>
	</ul>

	<h3>ライセンス</h3>
	<ul>
		<li>
			文章、画像などのコンテンツは、特に明記がない限り、 <a
				href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
				hreflang="ja"
				rel="external"
			>
				クリエイティブ・コモンズ 表示-継承 4.0 国際 ライセンス</a
			>の下で提供されています。
		</li>
		<li>
			ソースコードは、特に明記がない限り <a
				href="https://opensource.org/license/mit"
				rel="external"
			>
				MIT ライセンス</a
			>の下で提供されています。
		</li>
	</ul>
	<p>
		いずれの場合も、出典を <a href="/">https://peaks-and-valleys.github.io/</a> としてもらえれば問題ありません。
	</p>
</article>
