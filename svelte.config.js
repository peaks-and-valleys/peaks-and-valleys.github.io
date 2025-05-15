import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeExternalLinks from 'rehype-external-links';
import { createHighlighter } from 'shiki';

/** Syntax highlighting options */
const theme = 'poimandres';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['css', 'javascript', 'sass', 'typescript', 'yaml']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx'],
	highlight: {
		highlighter: async (code, lang) => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	},
	rehypePlugins: [[rehypeExternalLinks, { rel: 'external noopener noreferrer' }]]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			routes: { include: ['/*'], exclude: ['<all>'] }
		})
	},
	extensions: ['.svelte', '.svx']
};

export default config;
