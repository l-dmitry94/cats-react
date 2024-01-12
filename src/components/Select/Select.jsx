import SelectItem from './SelectItem';

const Select = ({ cats, onChooseCat }) => {
    const handleSelectChange = ({ target }) => {
        onChooseCat(target.value);
    };

    return (
        <select onChange={handleSelectChange}>
            {cats.map(({ id, name }) => (
                <SelectItem key={id} id={id} name={name} />
            ))}
        </select>
    );
};

export default Select;
