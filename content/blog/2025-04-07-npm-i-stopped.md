---
title: 'npm パッケージのインストールが固まるようになったから、やったこと'
description: 'キャッシュクリアで一応動きます'
date: '2025-04-07'
draft: 'false'
---

エラーログなども吐き出してくれず、ただただ固まるようになった。
それもたまに。困る。
ので色々やってみた。

開発環境は WSL 2 (Ubuntu 24.04) on Windows 11 Pro。

## とりあえずの解決策

### `npm cache verify`

[npm-cache | npm Docs](https://docs.npmjs.com/cli/v11/commands/npm-cache)

要するにキャッシュクリア。
`--force` オプションは付けなくても問題なかった。

## やってみたけど関係なさそうだったこと

### `etc/resolv.conf` の修正

参考: [WSL2 でnpm installが遅い時のもう一つの対策](https://qiita.com/y-uchiida/items/60aeda1a03343a503fb2)

Google ではなく Cloudflare のネームサーバーを使いたかったので、`etc/resolv.conf` はこうなる。

```
nameserver 1.1.1.1
nameserver 1.0.0.1
```

`etc/wsl.conf` にも以下の設定を書こう:

```
[network]
generateResolvConf = false
```

これを行った結果、WSL が再起動されるたびに `etc/resolv.conf` が上書きされる。なんでや。
同じ現象が起きた人がいらしたらしい: [wsl.conf で generateResolvConf = false を設定後に resolv.conf を修正しても、wsl2 を再起動すると resolv.conf が消えてしまう](https://qiita.com/nimowagukari/questions/5d428606c20c8f151f06)

釈然としないが、この件は一旦放置。
関係なさそうだから。

## 以上

釈然としない作業報告でした。