import { v4 as uuidv4 } from "uuid";

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
          <div key={uuidv4()} className="feature__element">
            {type.type.name}
          </div>
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
        <div className="feature__name">abilities:</div>
        <div className="feature__abilities">
          {pokemon.abilities.map((el) => (
            <div
              key={uuidv4()}
              className="feature__element feature__element--abilities"
            >
              {el.ability.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
