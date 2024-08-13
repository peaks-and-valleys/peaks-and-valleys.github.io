<script lang="ts">
    import logo_h from '$lib/images/peaksandvalleys_h.svg';
    import logo_v from '$lib/images/peaksandvalleys_v.svg';
    import background_h from '$lib/images/background_h.mp4';
    import background_v from '$lib/images/background_v.mp4';
</script>

<div class="cover-image">
    <video class="cover-components" loop autoplay muted playsinline>
        <source src={background_v} type="video/mp4" media="(max-width: 1080px)">
        <source src={background_h} type="video/mp4">
        <track kind="captions">
    </video>
    <picture class="cover-components">
        <source srcset={logo_v} media="(max-width: 768px)">
        <img src={logo_h} alt="Peaks and Valleys logo">
    </picture>
</div>

<style>
    .cover-image {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 100%;
    }
    .cover-components {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;
    }
    .cover-components:nth-child(1) { 
        z-index: 1; 
    }
    .cover-components:nth-child(2) { 
        z-index: 2; 
        transform: scale(0.625);
        mix-blend-mode: difference;
    }
</style>     
      