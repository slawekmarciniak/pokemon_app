import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../AppContext/AppContext";
import { Divider, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./search.css";

const Search = () => {
  const { searchPokemons } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.search);
    return searchPokemons(data.search);
  };

  const clear = () => {
    console.log("clear");
    // clearSearch();
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
          width: 400,
          height: 40,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputBase
          {...register("search", { required: true, min: 4 })}
          style={{ width: 320 }}
          placeholder="Search POKEMONS"
        />
        <Divider orientation="vertical" />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton onClick={clear} aria-label="clear">
          <ClearIcon />
        </IconButton>
      </Paper>
      {errors.search && <span>! This field is required</span>}
    </form>
  );
};

export default Search;
