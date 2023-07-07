<script>
    import { fetchImagesFromPexels } from "../lib/fetchImagesFromPexels";
    import Loading from "./Loading.svelte";

    export let searchTerm;
    const fetchImages = fetchImagesFromPexels(searchTerm);
</script>

<section id="carousel">
    {#await fetchImages}
        <Loading />
    {:then images}
        {#each images as { src, photographerUrl, photographer }}
            <figure>
                <img {src} alt="" />
                <figcaption>
                    <a href={photographerUrl} target="_blank">
                        Autor: <span>{photographer}</span>
                    </a>
                </figcaption>
            </figure>
        {/each}
    {/await}
</section>

<style>
    #carousel {
        display: flex;
        width: 80%;
        overflow-x: scroll;
        scroll-behavior: smooth;
    }
</style>
