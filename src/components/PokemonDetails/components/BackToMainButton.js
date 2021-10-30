import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackToMainButton = () => {
  const {
    setIsShowCard,
    setIsSearching,
    setFoundPokemons,
    setPage,
    setPagination,
  } = useContext(AppContext);
  let history = useHistory();
  const handleClick = () => {
    setIsShowCard(false);
    setIsSearching(false);
    setFoundPokemons(null);
    setPage(1);
    setPagination({
      pageStart: 0,
      pageEnd: 49,
    });
    history.goBack();
  };

  return (
    <div className="backButtonContainer">
      <Button
        style={{ color: "yellow", borderColor: "yellow" }}
        variant="outlined"
        onClick={handleClick}
      >
        <ArrowBackIcon style={{ marginRight: 20 }} /> HOME PAGE
      </Button>
    </div>
  );
};

export default BackToMainButton;
