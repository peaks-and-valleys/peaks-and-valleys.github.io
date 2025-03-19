---
title: 'TIL: hgroup 要素'
description: 'このサイトでも hgroup を採用してみる'
date: '2025-01-28'
draft: 'false'
---

## `<hgroup>` 要素

[`<hgroup>`: 見出しグループ要素 - HTML: ハイパーテキストマークアップ言語](https://developer.mozilla.org/ja/docs/Web/HTML/Element/hgroup)

W3C の HTML 仕様から追い出されるなど、なにかと不遇な人生を送ってきた要素。
HTML ベストプラクティスの文書でも、使わないように書かれてしまっている: [普通のHTMLの書き方](https://github.com/hail2u/html-best-practices-ja-detailed?tab=readme-ov-file#forget-about-hgroup-element)

構文はシンプルで、`<hgroup>` の中に主題を `<h*>` 要素で、副題を `<p>` 要素で書けばOK。
副題には `<p>` 要素のみしか使えず、これが以前の `<h*>` 要素も許容していた仕様とのコンフリクトが心配されていたようだが、解決しているらしい。

```
<hgroup>
    <h1>AAAAAAAAAAAAAA</h1>
    <p>aaaaaaaaaaaaaaa</p>
</hgroup>
```

また MDN にも <q>Implicit ARIA role: group</q> と記載があるように、れっきとしたセマンティック要素になっている。

### 参考資料

- [主題と副題のマークアップにはhgroupを使用する – TAKLOG](https://www.tak-dcxi.com/article/use-hgroup-for-marking-up-the-main-heading-and-subheading)
- [`<hgroup>` 要素は今どうなっているのか](https://blog.w0s.jp/682)