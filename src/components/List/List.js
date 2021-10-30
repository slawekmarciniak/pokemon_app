import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { getAllPokemons } from "../../api/api";
import ListElement from "./ListElement";
import ListMUI from "@mui/material/List";

import "./list.css";
import PaginationList from "./components/Pagination";

const List = () => {
  const { pokemons, setPokemons, foundPokemons, isSearching, pagination } =
    useContext(AppContext);

  useEffect(() => {
    if (!pokemons) {
      const getPokemons = async () => {
        const result = await getAllPokemons();
        setPokemons(result);
      };
      getPokemons();
    }
  }, [pokemons, setPokemons]);

  const shortList =
    pokemons && pokemons.slice(pagination.pageStart, pagination.pageEnd);

  return (
    <>
      {isSearching && (
        <div className="list">
          <ListMUI>
            {foundPokemons.map((el, index) => (
              <ListElement
                key={el.name}
                name={el.name}
                url={el.url}
                index={index}
              />
            ))}
          </ListMUI>
        </div>
      )}

      {pokemons ? (
        <div className="list">
          <PaginationList />
          <ListMUI>
            {shortList.map((el, index) => (
              <ListElement
                key={el.name}
                name={el.name}
                url={el.url}
                index={index}
              />
            ))}
          </ListMUI>
        </div>
      ) : (
        <div className="loader">is Loading</div>
      )}
    </>
  );
};

export default List;
