import { useEffect, useState } from 'react';
import { fetchBreeds, fetchCatByBreed } from 'services/cats-api';
import SelectWrapper from 'components/Select';
import CatInfo from 'components/CatInfo';

const App = () => {
    const [cats, setCats] = useState([]);
    const [referenceImageId, setReferenceImageId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [cat, setCat] = useState(null);
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
                    setCat(data);
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
            <SelectWrapper
                cats={cats}
                onChooseCat={chooseCat}
                referenceImageId={referenceImageId}
            />

            {isLoading && (
                <b style={{ display: 'block' }}>Loading data, please wait...</b>
            )}
            {!isLoading && cat && <CatInfo cat={cat} />}
        </>
    );
};

export default App;
