# [Peaks and Valleys](https://peaks-and-valleys.net)

A portfolio site.

## How to deploy

This site is hosted by Cloudflare Pages. Just follow these instructions:

* [SvelteKit | Cloudflare Pages docs](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/)
* [Cloudflare Pages • Docs • SvelteKit](https://kit.svelte.jp/docs/adapter-cloudflare)

The default version of Node.js on Cloudflare Pages might be older than the compatible version of SvelteKit.
If this problem happens, set the environment varialbe `NODE_VERSION` on Cloudflare Pages deployment setting.

## Blog function

This site has a simple blog function.
Articles are written in Markdown and placed in `content/blog`.
Each article has a YAML header:

```
---
title: "example"
description: "this is an example of a YAML blog header."
date: "2000-01-01"
draft: "true"
---
```

Here are the descriptions of each key:

* `title`: Page title of the article. This will also be in `<title>` tag.
* `description`: Short description of the article. This will also be in `<meta description>` tag.
* `date`: This value is also used for sorting of articles.
* `draft`: If the value is `"true"`, the article will not be built.