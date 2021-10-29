import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  //   const [isLogged, setIsLogged] = useState(false);
  //   const [inputValue, setInputValue] = useState("");

  //   const searchPokemons = (name) => {
  //     console.log("search");
  //   };
  //   const handleClick = () => {
  //     console.log("clik");
  //   };

  const number = 4;

  return (
    <AppContext.Provider
      value={{
        number,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
