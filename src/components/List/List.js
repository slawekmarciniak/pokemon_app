import ListElement from "./ListElement";

import ListMUI from "@mui/material/List";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./list.css";

const List = ({ data }) => {
  const [listSize, setListSize] = useState({
    start: 1,
    end: 50,
  });
  const list = data.slice(listSize.start - 1, listSize.end - 1);

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
          <span>{`pokemons ${listSize.start} to ${listSize.end} / ${data.length}`}</span>
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
          {list.map((el) => (
            <ListElement key={el.nam} name={el.name} url={el.url} />
          ))}
        </ListMUI>
      </div>
    </>
  );
};

export default List;
