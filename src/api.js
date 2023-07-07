import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID fg39WcsoZEM9qG8ojjOXQhQ0Ai9TnZPhPg3Uo9qY6Sk'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
}

export default searchImages;