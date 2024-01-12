import { useEffect, useState } from 'react';
import { fetchBreeds, fetchCatByBreed } from 'services/cats-api';
import Select from 'components/Select';
import CatInfo from 'components/CatInfo';

const App = () => {
    const [cats, setCats] = useState([]);
    const [referenceImageId, setReferenceImageId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [cat, setCat] = useState(null)
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
        setIsLoading(true);
        const selectedCat = async () => {
            try {
                if (referenceImageId) {
                    const data = await fetchCatByBreed(referenceImageId);
                    setCat(data)
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        selectedCat();
    }, [referenceImageId]);

    const chooseCat = breedId => {
        setReferenceImageId(breedId);
    };

    return (
        <>
            {isLoading && <b>Loading data, please wait...</b>}
            {!isLoading && (
                <Select
                    cats={cats}
                    onChooseCat={chooseCat}
                    selectedBreed={referenceImageId}
                />
            )}
            {cat && <CatInfo cat={cat}/>}
        </>
    );
};

export default App;
