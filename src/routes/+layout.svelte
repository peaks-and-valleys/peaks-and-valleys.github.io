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
    .navigation {
        padding: 1%;
    }
    .navigation a {
        display: inline-block;
        padding: 0.5rem 1rem 0.6rem 1rem;
        margin: 0.1rem;
        justify-content: space-between;
        align-items: center;
        font-size: 1.6rem;
        font-weight: normal;
        color: var(--background-color);
        background-color: var(--text-color);
        text-decoration: none;
        border-radius: 0.625rem 1rem 0.625rem 1rem;
    }
    .navigation a:hover {
        font-weight: bold;
        background-color: var(--accent-color);
    }
    .footer {
        padding: 0.5% 2% 0.625% 2%;
    }
    .footer p{
        width: 40%;
        margin: 0 0 0 auto;
        font-size: 0.75rem;
        text-align: right;  
    }
</style>