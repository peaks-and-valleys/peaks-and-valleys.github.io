<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="main">
    <h1>profile</h1>
    <div class="content-box">
        {@html data.content}
    </div>
</div>