import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../AppContext/AppContext";
import { Divider, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./search.css";

const SearchBar = () => {
  const { searchPokemons, setIsSearching, setFoundPokemons } =
    useContext(AppContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    return searchPokemons(data.search);
  };

  const clear = () => {
    setIsSearching(false);
    setFoundPokemons(null);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper
        style={{
          backgroundColor: "rgb(255, 203, 5)",
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 350,
          height: 40,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputBase
          {...register("search", {
            required: true,
            minLength: 2,
            pattern: /^[A-Za-z]+$/i,
          })}
          style={{ width: 250 }}
          placeholder="Search POKEMONS"
        />
        <Divider orientation="vertical" />
        <IconButton
          style={{ margin: "0 5px" }}
          type="submit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton
          style={{ margin: "0 5px" }}
          onClick={clear}
          aria-label="clear"
        >
          <ClearIcon />
        </IconButton>
      </Paper>
      {errors.search?.type === "required" && (
        <span className="error">* This field is required</span>
      )}
      {errors.search?.type === "minLength" && (
        <span className="error">* Write min. 2 letters </span>
      )}
      {errors.search?.type === "pattern" && (
        <span className="error">* Only letters are allowed</span>
      )}
    </form>
  );
};

export default SearchBar;
