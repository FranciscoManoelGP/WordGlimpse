<script>
    import { fetchImagesFromPexels } from "$lib/api/fetchImagesFromPexels";
    import Loading from "../Loading.svelte";
    import { icons } from "$lib/icons";
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
        disabled={scrollAmount === 0}
    >
        {@html icons.chevronLeft}
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
                            {@html icons.boxArrowUpRight}
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
        disabled={scrollAmount === 1160}
    >
        {@html icons.chevronRight}
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
