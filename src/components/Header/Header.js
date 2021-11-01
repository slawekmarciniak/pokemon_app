import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const isHomePath = location.pathname === "/" ? true : false;
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="pokemon_logo"
      />
      {isHomePath && <SearchBar />}
      <img className="header__image" src="./Pokemon.png" alt="pokemon__image" />
    </div>
  );
};

export default Header;
