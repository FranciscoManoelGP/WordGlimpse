// Função para buscar imagens na API Pexels
export async function fetchImagesFromPexels(searchTerm) {
    try {
        const numPages = 5;
        const url = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=${numPages}`;
        const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
        const headers = { Authorization: apiKey };

        const response = await fetch(url, { headers });
        const data = await response.json();

        return data.photos.map((photo, index) => ({
            index: index + 1,
            src: photo.src.tiny,
            photographer: photo.photographer,
            photographerUrl: photo.photographer_url,
        }));

    } catch (error) {
        console.error(error);
    }
}