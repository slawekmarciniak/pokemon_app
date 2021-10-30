import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
import { Pagination } from "@mui/material";

const PaginationList = () => {
  const { pokemons, page, setPage } = useContext(AppContext);
  const pagesNumber = Math.floor(pokemons.length / 50 + 1);

  const handleChange = (event, value) => {
    setPage(value);
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
