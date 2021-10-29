import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="pokemon_logo"
      />
      <img className="header__image" src="./Pokemon.png" alt="pokemon__image" />
    </div>
  );
};

export default Header;
