<script>
    import { fetchImagesFromPexels } from "../lib/fetchImagesFromPexels";
    import Loading from "./Loading.svelte";
    import { icons } from "../lib/icons";
    
    export let searchTerm;
    const fetchImages = fetchImagesFromPexels(searchTerm);
    
    let carouselImagesElement;
    let scrollAmount = 0;
    const scrollIncrement = 290; 
    
    function scrollCarousel(direction) {
        const containerWidth = carouselImagesElement.offsetWidth;
    
        if (direction === "left") {
            scrollAmount -= scrollIncrement;
        } else if (direction === "right") {
            scrollAmount += scrollIncrement;
        }
    
        if (scrollAmount < 0) {
            scrollAmount = 0;
        } else if (scrollAmount > carouselImagesElement.scrollWidth - containerWidth) {
            scrollAmount = carouselImagesElement.scrollWidth - containerWidth;
        }
    
        carouselImagesElement.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
</script>

<section id="carousel">
    <button on:click={() => scrollCarousel("left")}>
        {@html icons.chevronLeft}
    </button>
    <div id="carousel-images" bind:this={carouselImagesElement}>
        {#await fetchImages}
            <Loading />
        {:then images}
            {#each images as { src, photographerUrl, photographer }, index}
                <figure id="image-{index}">
                    <img {src} alt="" />
                    <figcaption>
                        <a href={photographerUrl} target="_blank">
                            Autor: <span>{photographer}</span>
                        </a>
                    </figcaption>
                </figure>
            {/each}
        {/await}
    </div>
    <button on:click={() => scrollCarousel("right")}>
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
