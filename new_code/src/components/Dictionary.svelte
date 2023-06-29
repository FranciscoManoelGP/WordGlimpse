<script>
    import { onMount } from "svelte";
    import { fetchDefinitionsFromDatamuseAPI } from "../lib/fetchDefinitionsFromDatamuseAPI";
    import Loading from "./Loading.svelte";

    export let searchTerm;
    let dictionary = [];
    let isLoading = false;

    onMount(async () => {
        isLoading = true;
        dictionary = await fetchDefinitionsFromDatamuseAPI(searchTerm);
        isLoading = false;
    });
</script>

<section id="dictionary">
    {#if isLoading}
        <Loading />
    {/if}

    {#each dictionary as { index, partOfSpeech, description }}
        <h3>{index}</h3>
        <p>{partOfSpeech}: {description}</p>
    {/each}
</section>

<style>
</style>
