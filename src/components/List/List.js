import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { getAllPokemons } from "../../api/api";
import ListElement from "./ListElement";
import ListMUI from "@mui/material/List";
import Button from "@mui/material/Button";
import "./list.css";

const List = () => {
  const { pokemons, setPokemons, foundPokemons, isSearching } =
    useContext(AppContext);
  const [listSize, setListSize] = useState({
    start: 1,
    end: 50,
  });

  console.log(foundPokemons);

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
    pokemons && pokemons.slice(listSize.start - 1, listSize.end - 1);

  const handleBackPagination = () =>
    listSize.start > 1 &&
    setListSize({
      start: listSize.start - 50,
      end: listSize.end - 50,
    });
  const handleForwardPagination = () =>
    listSize.end < 1150 &&
    setListSize({
      start: listSize.start + 50,
      end: listSize.end + 50,
    });

  return (
    <>
      {isSearching && (
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
      )}

      {pokemons ? (
        <div className="list">
          <div className="pagination">
            <Button
              color="inherit"
              variant="outlined"
              onClick={handleBackPagination}
              className="pagination__button"
            >
              back
            </Button>
            <span>{`pokemons ${listSize.start} to ${listSize.end} / ${pokemons.length}`}</span>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleForwardPagination}
              className="pagination__button"
            >
              next
            </Button>
          </div>
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
