const SelectItem = ({ id, name }) => {
    return (
        <option value={id}>
            {name}
        </option>
    );
};

export default SelectItem;
