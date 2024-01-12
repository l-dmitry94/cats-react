import { useEffect, useState } from 'react';
import { fetchBreeds, fetchCatByBreed } from 'services/cats-api';
import Select from 'components/Select';
import CatInfo from 'components/CatInfo';

const App = () => {
    const [cats, setCats] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const allBreeds = async () => {
            try {
                const data = await fetchBreeds();
                setCats(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        allBreeds();
    }, []);

    useEffect(() => {
        const selectedCat = async () => {
            if (selectedBreed) {
                const data = await fetchCatByBreed(selectedBreed);

                console.log(data);
            }
        };
        selectedCat();
    }, [selectedBreed]);

    const chooseCat = breedId => {
        setSelectedBreed(breedId);
    };

    return (
        <>
            {isLoading && <p>Loading...</p>}
            <Select cats={cats} onChooseCat={chooseCat} />
            <CatInfo />
        </>
    );
};

export default App;
