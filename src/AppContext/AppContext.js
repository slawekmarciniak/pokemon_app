import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(null);
  const [foundPokemons, setFoundPokemons] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);

  const searchPokemons = (name) => {
    const duplicates = pokemons.filter(
      (el) => el.name.slice(0, name.length) === name.toLowerCase()
    );
    setFoundPokemons(duplicates);
    setIsSearching(true);
  };

  return (
    <AppContext.Provider
      value={{
        pokemons,
        setPokemons,
        searchPokemons,
        foundPokemons,
        isSearching,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
