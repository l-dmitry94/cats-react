import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
});

export const fetchBreeds = async () => {
    const { data } = await instance('/breeds');
    return data;
};

export const fetchCatByBreed = async breedId => {
    const { data } = await instance(`/images/search?breed_ids=${breedId}`);
    return data;
};
