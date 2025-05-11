<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/head-properties.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<HeadProperties
	pageTitle="プライバシーとライセンス"
	description="このサイトのプライバシーやコンテンツのライセンスについての説明"
></HeadProperties>

<article class="p-articleContainer">
	<h1>プライバシーとライセンス</h1>
	<article>
		<h2 id="プライバシーポリシー">プライバシーポリシー</h2>
		<p>
			告知義務はない（はず）ですが、簡潔に記します。 
		</p>
		<ul>
			<li>
				当サイトでは、サードパーティ Cookie
				やフィンガープリントなど、個人を特定し得る手法を使ったアクセス解析は実施していません。
			</li>
			<li>広告やアフィリエイトリンクなどはありません。</li>
			<li>
				サイトのホスティングや一部コンテンツの読み込みに CDN
				を利用していますが、それらによる追跡は行われていないはずです。各社のプライバシーポリシーは以下のリンクで確認できます。
				<ul>
					<li>
						<a href="https://www.cloudflare.com/ja-jp/privacypolicy/" rel="external"
							>Cloudflare のプライバシーポリシー</a
						>
					</li>
				</ul>
			</li>
		</ul>
		<h2 id="ライセンス">ライセンス</h2>
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
			いずれの場合も、出典を <a href="/">https://peaks-and-valleys.net</a> としてもらえれば問題ありません。
		</p>
	</article>
</article>
