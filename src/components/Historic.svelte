<script>
  import { fetchExamplesFromDatamuseAPI } from "$lib/api/fetchExamplesFromDatamuseAPI";
  export let searchTerm;

  function searchTermHistory(searchTerm) {
    let history = Array();
    if (localStorage.hasOwnProperty(`searched`)) {
      history = JSON.parse(localStorage.getItem(`searched`));
      history.push({ term: searchTerm });
      keepTrackTen(history)
      localStorage.setItem(`searched`, JSON.stringify(history));
    } else {
      history.push({ term: searchTerm });
      keepTrackTen(history)
      localStorage.setItem(`searched`, JSON.stringify(history));
    }
  }
  searchTermHistory(searchTerm);

  function responseTermHistory(searchTerm) {
    let responseToHistory = Array();
    console.log(responseToHistory.length);
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
          keepTrackTen(responseToHistory)
          localStorage.setItem(`apiResult`, JSON.stringify(responseToHistory));
        } else {
          responseToHistory.push({ info: historifyResponse });
          keepTrackTen(responseToHistory)
          localStorage.setItem(`apiResult`, JSON.stringify(responseToHistory));
        }
      });
  }
  responseTermHistory(searchTerm);

  function keepTrackTen(array) {
    if (array.length > 10) {
      array.shift();
    }
  }
</script>
