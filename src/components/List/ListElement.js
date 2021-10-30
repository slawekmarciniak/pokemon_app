import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import Button from "@mui/material/Button";

const ListElement = ({ name, index }) => {
  const { pokemons } = useContext(AppContext);
  let history = useHistory();
  const handleClick = () => {
    history.push(name);
  };

  const pokemonIndex = pokemons.findIndex((e) => e.name === name);
  console.log(pokemons);

  return (
    <li className="list__item">
      <img
        className="list__avatar"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemonIndex + 1
        }.png`}
        alt="pokemon"
      />
      {name}
      <Button color="inherit" variant="outlined" onClick={handleClick}>
        check details
      </Button>
    </li>
  );
};

export default ListElement;
