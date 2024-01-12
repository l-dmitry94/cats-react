import SelectItem from './SelectItem';

const Select = ({ cats, onChooseCat, reference_image_id }) => {
    const handleSelectChange = ({ target }) => {
        onChooseCat(target.value);
    };

    return (
        <select value={reference_image_id} onChange={handleSelectChange}>
            {cats.map(({ id, name, reference_image_id }) => (
                <SelectItem key={id} id={reference_image_id} name={name} />
            ))}
        </select>
    );
};

export default Select;
