<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<svelte:head>
    <title>Peaks and Valleys - profile</title>
    <meta name="description" content="let me introduce myself" />
</svelte:head>

<div class="main">
    <h1>profile</h1>
    <div class="content-box">
        {@html data.content}
    </div>
</div>