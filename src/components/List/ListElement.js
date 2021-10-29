import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

const ListElement = ({ name, index }) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(name);
  };
  return (
    <li className="list__item" onClick={handleClick}>
      <img
        className="list__avatar"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`}
        alt=""
      />
      {name}
      <Button color="inherit" variant="outlined">
        check details
      </Button>
    </li>
  );
};

export default ListElement;
