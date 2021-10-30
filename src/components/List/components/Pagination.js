import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import { Pagination } from "@mui/material";

const elementsOnPageNumber = 50;

const PaginationList = () => {
  const { pokemons, page, setPage, setPagination } = useContext(AppContext);
  const pagesNumber = Math.floor(pokemons.length / elementsOnPageNumber + 1);

  const handleChange = (event, value) => {
    setPage(value);
    setPagination({
      pageStart: value * elementsOnPageNumber - elementsOnPageNumber,
      pageEnd: value * elementsOnPageNumber - 1,
    });
  };

  return (
    <>
      <div className="pagination">
        <Pagination
          count={pagesNumber}
          page={page}
          color="primary"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default PaginationList;
