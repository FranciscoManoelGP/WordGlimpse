export async function fetchDefinitionsFromDatamuseAPI(searchTerm) {
    try {
        const url = `https://api.datamuse.com/words?sp=${searchTerm}&md=d`;

        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data)) {
            const definitions = data[0]?.defs || [];
            return definitions.map((definition, index) => {
                const [partOfSpeech, description] = definition.split('\t');
                const formattedPartOfSpeech = formatPartOfSpeech(partOfSpeech);
                const formattedDescription = formatDescription(description);

                return {
                    index: index + 1,
                    partOfSpeech: formattedPartOfSpeech,
                    description: formattedDescription,
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

function formatPartOfSpeech(partOfSpeech) {
    const partOfSpeechMap = {
        n: 'Noun',
        v: 'Verb',
        adj: 'Adjective', 
        adv: 'Adverb', 
        u: 'Unknown',
    };

    return partOfSpeechMap[partOfSpeech] || partOfSpeech;
}

function formatDescription(description) {
    return description.replace(/\\n/g, '').trim();
}