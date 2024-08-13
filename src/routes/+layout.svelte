<script lang="ts">
    import type { LayoutData } from './$types';
    import '$lib/styles/styles.css';
    
</script>

<header>
    <nav class="navigation">
        <a href="/">home</a>
        <a href="/profile">profile</a>
        <a href="/works">works</a>
    </nav>
</header>

<slot />

<footer class="footer">
    <p> All contents on this website by Peaks and Valleys are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0</a> (unless explicitly mentioned) </p>
</footer>