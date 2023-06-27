<script>
    export let images = [];
</script>

<section id="carousel">
    {#each images as { photo, photographerLink, photographer }}
        <figure>
            <img src="{photo}" alt="" />
            <figcaption>
                <a href="{photographerLink}" target="">Autor: <span>{photographer}</span></a>
            </figcaption>
        </figure>
    {/each}
</section>

<style>
</style>
