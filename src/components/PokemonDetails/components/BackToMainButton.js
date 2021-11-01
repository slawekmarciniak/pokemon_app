import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackToMainButton = () => {
  const { resetSearchAndShowCard } = useContext(AppContext);
  let history = useHistory();
  const handleClick = () => {
    resetSearchAndShowCard();
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
