<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="main">
    <h1>{data.items.title}</h1>
    <p>{data.items.date}</p>
    <div class="content-box">
        {@html data.items.content}
    </div>
</div>