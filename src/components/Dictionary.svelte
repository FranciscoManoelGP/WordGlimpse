<script>
    import { fetchExamplesFromDatamuseAPI } from "$lib/api/fetchExamplesFromDatamuseAPI";
    import Loading from "./Loading.svelte";

    export let searchTerm;
    const fetchExemples = fetchExamplesFromDatamuseAPI(searchTerm);
</script>

<section id="dictionary">
    {#await fetchExemples}
        <Loading />
    {:then examples}
        {#each examples as {index, word, tags}}
            <h3>{index}</h3>
            <p>{word}</p>
            {#each tags as tag}
                <p>{tag}</p>
            {/each}
        {/each}
    {/await}
</section>

<style>
    #dictionary {
        overflow-wrap: break-word;
    }
</style>
