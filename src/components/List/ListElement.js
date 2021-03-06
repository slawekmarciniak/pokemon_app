import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import Button from "@mui/material/Button";

const ListElement = ({ name, index }) => {
  const { pokemons, resetSearchAndShowCard } = useContext(AppContext);
  let history = useHistory();
  const handleClick = () => {
    resetSearchAndShowCard();
    history.push(name);
  };

  const pokemonIndex = pokemons.findIndex((e) => e.name === name);

  return (
    <li className={`list__item ${index % 2 === 0 && "list__item--even"}`}>
      <img
        className="list__avatar"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemonIndex + 1
        }.png`}
        alt="pokemon"
      />
      <div className="list__name">{name}</div>

      <Button
        className="details"
        color="inherit"
        variant="outlined"
        onClick={handleClick}
      >
        check details
      </Button>
    </li>
  );
};

export default ListElement;
