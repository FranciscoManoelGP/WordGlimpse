<script>
    import { fetchDefinitionsFromDatamuseAPI } from "../lib/api/fetchDefinitionsFromDatamuseAPI";
    import Loading from "./Loading.svelte";

    export let searchTerm;
    const fetchDefinitions = fetchDefinitionsFromDatamuseAPI(searchTerm);
</script>

<section id="dictionary">
    {#await fetchDefinitions}
        <Loading />
    {:then definitions}
        {#each definitions as { index, partOfSpeech, description }}
            <h3>{index}</h3>
            <p>{partOfSpeech}: {description}</p>
        {/each}
    {/await}
</section>

<style>
    #dictionary {
        overflow-wrap: break-word;
    }
</style>
