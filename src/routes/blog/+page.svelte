<script lang="ts">
    import type { PageData } from '../blog/$types';
    
    export let data: PageData;
</script>

<div class="main">
    <h1>blog</h1>
    {#each data.items as item}
        <a href="blog/{item.slug}">
            <div class="link-box">
                <h2>{item.title}</h2>
                <p>{item.date}</p>
                <p>{item.description}</p>
            </div>
        </a>
    {/each}
</div>