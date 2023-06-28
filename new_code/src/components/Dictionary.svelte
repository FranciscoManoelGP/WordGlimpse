<script>
    import Loading from "./Loading.svelte";

    let dictionary = [];
    let isLoading = false;
</script>

<section id="dictionary">
    {#if isLoading}
        <Loading />
    {/if}

    {#each dictionary as {type, definition, example}}
        <h3>{type}</h3>
        <p>{definition}</p>
        <p>{example}</p>
    {/each}
</section>

<style>
</style>
