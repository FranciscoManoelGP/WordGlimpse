<script>
    import viteLogo from "/vite.svg";
    import Counter from "./lib/Counter.svelte";
    import Carousel from "./components/Carousel.svelte";
</script>

<header>
    <h1>WordGlimpse</h1>
</header>

<main>
    <form action="">
        <input type="text" id="search" />
        <button>Traduzir</button>
    </form>

    <article>
        <Carousel />

        <section id="dictionary" />
    </article>
</main>

<style>
    
</style>