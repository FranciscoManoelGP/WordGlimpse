<script>
    import { fetchImagesFromPexels } from "$lib/api/fetchImagesFromPexels";
    import Loading from "../Loading.svelte";
    import { BoxArrowRight, ChevronLeft, ChevronRight } from "$lib/icons";
    import { scrollCarousel } from "./index";

    export let searchTerm;
    const fetchImages = fetchImagesFromPexels(searchTerm);

    let scrollAmount = 0;
    let carouselImagesElement;
</script>

<section id="carousel">
    <button
        on:click={() =>
            (scrollAmount = scrollCarousel(
                "left",
                carouselImagesElement,
                scrollAmount
            ))}
    >
        <ChevronLeft />
    </button>
    <div id="carousel-images" bind:this={carouselImagesElement}>
        {#await fetchImages}
            <Loading />
        {:then images}
            {#each images as { index, src, photographerUrl, photographer }}
                <figure id="image-{index}">
                    <img {src} alt="" />
                    <figcaption>
                        <a href={photographerUrl} target="_blank">
                            Autor: {photographer}
                            <BoxArrowRight />
                        </a>
                    </figcaption>
                </figure>
            {/each}
        {/await}
    </div>
    <button
        on:click={() =>
            (scrollAmount = scrollCarousel(
                "right",
                carouselImagesElement,
                scrollAmount
            ))}
    >
        <ChevronRight />
    </button>
</section>

<style>
    #carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
    }
    #carousel-images {
        display: flex;
        width: 280px;
        overflow-x: hidden;
        scroll-behavior: smooth;
        margin: 15px;
        gap: 10px;
    }
</style>
