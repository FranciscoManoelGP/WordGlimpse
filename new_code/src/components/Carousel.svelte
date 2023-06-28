<script>
    import { onMount } from "svelte";
    import { fetchImagesFromPexels } from "../lib/fetchImagesFromPexels";
    import Loading from "./Loading.svelte";

    export let searchTerm;
    export let images = [];
    let isLoading = false;

    onMount(async () => {
        isLoading = true;
        images = await fetchImagesFromPexels(searchTerm);
        isLoading = false;
    });
</script>

<section id="carousel">
    {#if isLoading}
        <Loading />
    {/if}

    {#each images as { src, photographerUrl, photographer }}
        <figure>
            <img {src} alt="" />
            <figcaption>
                <a href={photographerUrl} target=""
                    >Autor: <span>{photographer}</span></a
                >
            </figcaption>
        </figure>
    {/each}
</section>

<style>
</style>
