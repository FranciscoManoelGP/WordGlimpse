<script>
  import { fetchExamplesFromDatamuseAPI } from "$lib/api/fetchExamplesFromDatamuseAPI";
  import Index from "./Carousel/index.svelte";
  export let searchTerm;

  //TODO: condidion to track the 10 lasts
  function searchTermHistory(searchTerm) {
    let history = Array();
    if (localStorage.hasOwnProperty(`searched`)) {
      history = JSON.parse(localStorage.getItem(`searched`));
      history.push({ term: searchTerm });
      localStorage.setItem(`searched`, JSON.stringify(history));
    } else {
      history.push({ term: searchTerm });
      localStorage.setItem(`searched`, JSON.stringify(history));
    }
  }
  searchTermHistory(searchTerm);

  //TODO: condidion to track the 10 lasts
  function responseTermHistory(searchTerm) {
    let responseToHistory = Array();
    let fetchExemples = fetchExamplesFromDatamuseAPI(searchTerm)
      .then((response) =>
        response
          .map(
            (mapped) => `
      <h3>${mapped.index}<h3>
      <p>${mapped.word}</p>
      <p>${mapped.tags.map((tag) => `<p>${tag}</p>`).join("")}</p>
        `
          )
          .join("")
      )
      .then((historifyResponse) => {
        if (localStorage.hasOwnProperty(`apiResult`)) {
          responseToHistory = JSON.parse(localStorage.getItem(`apiResult`));
          responseToHistory.push({ info: historifyResponse });
          localStorage.setItem(`apiResult`, JSON.stringify(responseToHistory));
        } else {
          responseToHistory.push({ info: historifyResponse });
          localStorage.setItem(`apiResult`, JSON.stringify(responseToHistory));
        }
      });
  }
  responseTermHistory(searchTerm);
</script>
