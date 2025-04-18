<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>プライバシーとライセンス - Peaks and Valleys</title>
	<meta name="description" content="プライバシーとライセンスについて" />
</svelte:head>

<article class="p-articles">
	<h1 class="p-articles__heading u-rounded-border">プライバシーとライセンス</h1>
	<article class="p-article u-rounded-border">
		<h2>プライバシー</h2>

		<h3>Cookieの使用</h3>
		<p>
			当サイトでは、サイトの基本的な機能を提供するために必要最小限の Cookie
			のみを使用する場合があります。アクセス解析やターゲティング広告など、追跡を目的とした Cookie、
			またサードパーティ Cookie は使用していません。
		</p>

		<h3>広告</h3>
		<p>
			当サイトでは、広告の掲載は一切行っておりません。また、広告目的での情報収集やトラッキングは実施していません。
		</p>

		<h3>アクセス解析</h3>
		<p>当サイトでは、アクセス解析を一切行っておりません。</p>

		<h2>ライセンス</h2>

		<p>本ブログの記事は、以下のライセンスで提供されます：</p>
		<ul>
			<li>
				文章、画像などのコンテンツは、特に明記がない限り、 <a
					href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja"
					hreflang="ja"
				>
					クリエイティブ・コモンズ 表示-継承 4.0 国際 ライセンス</a
				>の下で提供されています。
			</li>
			<li>
				ソースコードは、特に明記がない限り <a href="https://opensource.org/license/mit">
					MIT ライセンス</a
				>の下で提供されています。
			</li>
		</ul>
	</article>
</article>
