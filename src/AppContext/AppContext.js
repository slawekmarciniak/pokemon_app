import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(null);
  const [foundPokemons, setFoundPokemons] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    pageStart: 0,
    pageEnd: 49,
  });
  const [isShowCard, setIsShowCard] = useState(false);

  const searchPokemons = (name) => {
    const duplicates = pokemons.filter(
      (el) => el.name.slice(0, name.length) === name.toLowerCase()
    );
    setFoundPokemons(duplicates);
    setIsSearching(true);
  };

  const resetSearchAndShowCard = () => {
    setIsShowCard(false);
    setPage(1);
    setFoundPokemons(null);
    setIsSearching(false);
    setPagination({
      pageStart: 0,
      pageEnd: 49,
    });
  };

  return (
    <AppContext.Provider
      value={{
        pokemons,
        setPokemons,
        searchPokemons,
        foundPokemons,
        setFoundPokemons,
        isSearching,
        setIsSearching,
        page,
        setPage,
        pagination,
        setPagination,
        isShowCard,
        setIsShowCard,
        resetSearchAndShowCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
