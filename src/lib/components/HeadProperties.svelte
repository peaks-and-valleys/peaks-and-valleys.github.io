<script lang="ts">
	import { page } from '$app/state';

	const baseTitle: string = 'Peaks and Valleys';
	export let pageTitle: string = '';
	let wholeTitle = baseTitle;

	if (pageTitle != '') {
		wholeTitle = pageTitle + ' - ' + baseTitle;
	}

	export let description: string = '底が見えるほど深く、手が届くほど広い';

	const baseUrl: string = 'https://peaks-and-valleys.github.io';
	let pagePath = page.url.pathname;

	// Remove grouping "/()" path
	pagePath = pagePath.replace(/\([^()]*\)/g, '');
	pagePath = pagePath.replace(/\/\//g, '/');

	let wholeUrl: string = baseUrl + pagePath;

	export let contentLang = 'ja';
	export let pageType: string = 'website';
</script>

<svelte:head>
	<title>{wholeTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={wholeTitle} />
	<meta property="og:url" content={wholeUrl} />
	<meta property="og:image" content="{baseUrl}/images/ogp.jpg" />
	<meta property="og:site_name" content={baseTitle} />
	<meta property="og:locale" content={contentLang} />
	<meta property="og:type" content={pageType} />
</svelte:head>
