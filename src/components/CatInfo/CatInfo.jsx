const CatInfo = ({ cat }) => {
    const { url, breeds } = cat;
    const { description, temperament, name } = breeds[0];
    
    return (
        <section>
            <img src={url} alt={name} />
            <div className="cat-info">
                <h1>{name}</h1>
                <p>{description}</p>
                <div>
                    <b>Temperament: </b>
                    {temperament}
                </div>
            </div>
        </section>
    );
};

export default CatInfo;
