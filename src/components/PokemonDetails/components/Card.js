const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <img className="card__img" src={pokemon.sprites.front_default} alt="" />
      <div className="feature">
        <span className="feature__name">name:</span>
        <span className="feature__text">{pokemon.name}</span>
      </div>
      <div className="feature">
        <span className="feature__name">types:</span>
        {pokemon.types.map((type) => (
          <div className="feature__element">{type.type.name}</div>
        ))}
      </div>
      <div className="feature">
        <span className="feature__name">weight:</span>
        <span className="feature__text">{pokemon.weight}</span>
      </div>

      <div className="feature">
        <span className="feature__name">height:</span>
        <span className="feature__text">{pokemon.height}</span>
      </div>
      <div className="feature">
        <p className="feature__name">abilities:</p>
        {pokemon.abilities.map((el) => (
          <div className="feature__element feature__element--abilities">
            {el.ability.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
