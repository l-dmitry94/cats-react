import SelectItem from './SelectItem';

const Select = ({ cats, onChooseCat, referenceImageId }) => {
    const handleSelectChange = ({ target }) => {
        onChooseCat(target.value);
    };

    return (
        <select value={referenceImageId} onChange={handleSelectChange}>
            {cats.map(({ id, name, reference_image_id }) => (
                <SelectItem key={id} id={reference_image_id} name={name} />
            ))}
        </select>
    );
};

export default Select;
