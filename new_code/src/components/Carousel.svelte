<script>
    export let images = [];
</script>

<section id="carousel">
    {#each images as { src, photographerUrl, photographer }}
        <figure>
            <img src="{src}" alt="" />
            <figcaption>
                <a href="{photographerUrl}" target="">Autor: <span>{photographer}</span></a>
            </figcaption>
        </figure>
    {/each}
</section>

<style>
</style>
