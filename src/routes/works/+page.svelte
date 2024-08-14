<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="main">
    <h1>works</h1>
    {#each data.items as item}
        <a href={item.link} target="_blank">
            <div class="link-box">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </a>
    {/each}
</div>