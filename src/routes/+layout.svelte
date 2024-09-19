<script lang="ts">
    import type { LayoutData } from './$types';
    import '$lib/styles/styles.css';
    
</script>

<header>
    <nav class="navigation">
        <a href="/">home</a>
        <a href="/profile">profile</a>
        <a href="/works">works</a>
        <a href="/blog">blog</a>
    </nav>
</header>

<slot />

<footer class="footer">
    <p> This site does not use third-party or tracking cookies.</p>
    <p> Articles on this website by Peaks and Valleys are licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> (unless explicitly mentioned). </p>
</footer>

<style>
</style>