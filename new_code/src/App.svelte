<script>
    import viteLogo from "/vite.svg";
    import Carousel from "./components/Carousel.svelte";
    import { onMount } from "svelte";
    import { fetchImagesFromPexels } from "./lib/fetchImagesFromPexels.js";

    let images = [];

    async function handleSearch(event) {
        event.preventDefault();
        const searchTerm = event.target.search.value;

        try {
            images = await fetchImagesFromPexels(searchTerm);
        } catch (error) {
            console.error(error);
        }
    }

    export const defaultSearchTerm = "fire";
    onMount(async () => {
        try {
            images = await fetchImagesFromPexels(defaultSearchTerm);
        } catch (error) {
            console.error(error);
        }
    });
</script>

<header>
    <h1>WordGlimpse</h1>
</header>

<main>
    <form on:submit={handleSearch}>
        <input type="text" id="search" placeholder={defaultSearchTerm} />
        <button type="submit">Traduzir</button>
    </form>

    <article>
        <Carousel {images} />

        <section id="dictionary" />
    </article>
</main>

<style>
</style>
