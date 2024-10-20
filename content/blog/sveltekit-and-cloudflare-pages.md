---
title: "SvelteKit + Cloudflare Pages でポートフォリオサイトの構築"
description: "first commit"
date: "2024-10-20"
draft: "false"
---

*以下の情報は2024年10月現在のものです*

---

要するにこのサイトの構築手順をまとめた。
リポジトリは[こちら](https://github.com/peaksvndvalleys/pav_works)。

## [Svelte](https://svelte.jp) と [SvelteKit](https://kit.svelte.jp) について

`Svelte` は主にフロントエンドを書くためのコンパイラとその記法、その公式フレームワークが `SvelteKit`、という感じらしい。

公式サイトに[インタラクティブなチュートリアル](https://learn.svelte.jp/)があり、更に[実行環境](https://svelte.jp/repl/)すらある。
至れり尽くせりだね。

素に近い HTML, CSS, JavaScript (TypeScript) が書け、フレームワークそのものの学習に比較的手間取らないというウワサを聞いたので試してみた。
だいたい合っていると思う。

## Cloudflare Pages へのデプロイ

Svelte と Cloudflare は相思相愛なので、それぞれのドキュメントにデプロイ手順の解説ページがある。
GitHub リポジトリにコードをプッシュしたら、勝手に処理が走ってビルドしてくれる CI/CD 環境を（GitHub Actions すら書くことなく）かなり簡単にセットアップできる。

* [SvelteKit | Cloudflare Pages docs](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/)
* [Cloudflare Pages • Docs • SvelteKit](https://kit.svelte.jp/docs/adapter-cloudflare)

上記のドキュメントに書いていないこととしては、Cloudflare Pages のデフォルト設定の Node.js のバージョンが古いせいで、ビルドが失敗することがある。
環境変数 `NODE_VERSION` によって、お使いの SvelteKit に対応したバージョンが走るよう指定できる。
これはそのうち問題ではなくなる気がする。

というわけで、パッケージマネージャが `npm` ならこちらのデフォルト設定でOK。

![](/blog/sveltekit-and-cloudflare-pages/cp_config.webp)

## ブログの実装

バックエンドはほとんど何もしていないに等しいのだが、かなりシンプルなブログを付けている（こういう記事を書くために）。
タグ機能や前後の記事に飛ぶボタンすらないが、これらは気が向いたら実装したい。

このブログは特定ディレクトリに放り込んだ Markdown ファイルを読み込んでレンダリングすることで生成しており、各ファイルには以下のような YAML ヘッダを付けている：

```
title: "example"
description: "this is an example of a YAML blog header."
date: "2000-01-01"
draft: "true"
```

`draft` キーが `"true"` の場合は下書き扱いでレンダリングしないようにしているのだが、これは Hugo のブログテンプレートを弄ったときにこのパラメータがあって、良いと思ったから真似した。
`date` キーは記事を日時が新しい順にソートするのに使用している。

## サイトデザイン

Figma などでのプロトタイピングはせず、出たとこ勝負で作っていった。
CSS は多少書けるからなんとかなるだろうと思いながら。

過度な装飾はせず、軽いサイトにしたかったので、俺なりの [Brutalist Website](https://brutalistwebsites.com) をやる気持ちで作っていた。
上手くいったかどうかは良く分からない。

## 参考資料

SvelteKit を使うにあたり、公式ドキュメントとMDN以外で特にお世話になったのは以下：

* [【SvelteKit 入門】はじめに](https://zenn.dev/wnr/articles/50cnoe5xvzmw)
* [未経験からでもSvelteKitを使って3日で技術ブログを作成する](https://zenn.dev/ring_belle/books/blog-sveltekit)
* [SvelteKit + microCMS のブログ作成チュートリアル](https://blog.microcms.io/sveltekit-tutorial/)
    * このサイトでは microCMS 等のヘッドレスCMSは用いていないが、一度試してはみた