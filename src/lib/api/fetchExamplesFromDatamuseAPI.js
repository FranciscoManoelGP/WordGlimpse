export async function fetchExamplesFromDatamuseAPI(searchTerm) {
    try {
        const url = `https://api.datamuse.com/words?ml=${searchTerm}&md=e`;

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data)) {
            return data.map((example, index) => {
                const word = example.word;
                const tags = example.tags;
                const formattedTags = tags.map(tag => formatTags(tag));
                return {
                    index: index + 1,
                    word,
                    tags: formattedTags
                };
            });
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

function formatTags(tags) {
    const tagsMap = {
        syn: "Synonyms",
        n: 'Noun',
        v: 'Verb',
        adj: 'Adjective',
        adv: 'Adverb',
        u: 'Unknown',
        "results_type:primary_rel": "Primary Relationship"
    };

    return tagsMap[tags] || tags;
}