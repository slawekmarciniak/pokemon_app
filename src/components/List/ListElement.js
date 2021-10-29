import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

const ListElement = ({ name, url }) => {
  let history = useHistory();
  const handleClick = () => {
    history.push(name);
  };
  return (
    <li className="list__item" onClick={handleClick}>
      {name}
      <Button color="inherit">check details</Button>
    </li>
  );
};

export default ListElement;
