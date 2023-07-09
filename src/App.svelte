<script>
    import Carousel from "./components/Carousel.svelte";
    import Dictionary from "./components/Dictionary.svelte";

    export let searchTerm = "fire"
    function handleSearch(event) {
        event.preventDefault();
        searchTerm = event.target.search.value;
    }
</script>

<header>
    <h1>WordGlimpse</h1>
</header>

<main>
    <form on:submit={handleSearch}>
        <input type="text" id="search" placeholder={searchTerm}/>
        <button type="submit">Traduzir</button>
    </form>

    <article>
        {#key searchTerm}
            <Carousel {searchTerm}/>
            <Dictionary {searchTerm}/>
        {/key}
    </article>
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    article{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
</style>
