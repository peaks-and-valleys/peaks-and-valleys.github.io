---
title: '普通の HTML を書く: HTML Best Practices 読書感想文'
description: 'Never underestimate HTML'
date: '2024-11-24'
draft: 'true'
---

## はじめに

- [GitHub - hail2u/html-best-practices: For writing maintainable and scalable HTML documents](https://github.com/hail2u/html-best-practices)
- [GitHub - hail2u/html-best-practices-ja-detailed: 普通のHTMLの書き方: 保守しやすく、規模に依存しないHTML文書のために](https://github.com/hail2u/html-best-practices-ja-detailed)

後者のほうを読んだ。長かった。

それを踏まえてこのサイトのソースコードを修正したりしなかったりした。

## 読後メモ

### 読んだ後に修正した点

- [main](https://github.com/hail2u/html-best-practices-ja-detailed?tab=readme-ov-file#main%E8%A6%81%E7%B4%A0%E3%82%92%E4%BD%BF%E3%81%86), [address](https://github.com/hail2u/html-best-practices-ja-detailed?tab=readme-ov-file#address%E8%A6%81%E7%B4%A0%E3%81%AF%E9%80%A3%E7%B5%A1%E5%85%88%E6%83%85%E5%A0%B1%E3%81%AB%E3%81%AE%E3%81%BF%E4%BD%BF%E3%81%86), [time](https://github.com/hail2u/html-best-practices-ja-detailed?tab=readme-ov-file#%E6%A9%9F%E6%A2%B0%E7%9A%84%E3%81%AB%E8%A7%A3%E9%87%88%E5%8F%AF%E8%83%BD%E3%81%A7%E3%81%AA%E3%81%84time%E8%A6%81%E7%B4%A0%E3%81%A7%E3%81%AFdatetime%E5%B1%9E%E6%80%A7%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B) 要素
  - 実は `main` 要素の存在は axe DevTools に怒られたときに気が付いていた
  - それ以外に関しては、要素の存在すら気が付いていなかった

## まだ修正していない点

- <q>[audioやvideo要素にフォールバックのためのコンテンツを提供する](https://github.com/hail2u/html-best-practices-ja-detailed?tab=readme-ov-file#audio%E3%82%84video%E8%A6%81%E7%B4%A0%E3%81%AB%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AB%E3%83%90%E3%83%83%E3%82%AF%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%92%E6%8F%90%E4%BE%9B%E3%81%99%E3%82%8B)</q>
  - 単にフォールバック用のコンテンツが用意できていない

## まだよくわかっていないもの

- <q>[relやhreflang、type属性を必要ならば使う](https://github.com/hail2u/html-best-practices-ja-detailed?tab=readme-ov-file#rel%E3%82%84hreflangtype%E5%B1%9E%E6%80%A7%E3%82%92%E5%BF%85%E8%A6%81%E3%81%AA%E3%82%89%E3%81%B0%E4%BD%BF%E3%81%86)</q>
  - `rel="me"` だけはなんとなく良さそうだったから追加してみたけど、もしかして使い方間違ってる？ [MDN のドキュメント](https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/rel/me)
- <q>[`favicon.ico`へリンクしない](https://github.com/hail2u/html-best-practices-ja-detailed?tab=readme-ov-file#faviconico%E3%81%B8%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%97%E3%81%AA%E3%81%84)</q>
  - そもそも、svg しか用意しないのは良くなかったりする？
