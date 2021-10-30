import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const numberOfAllPokemons = 898;

const config = {
  method: "get",
  url: baseUrl,
  params: {
    limit: numberOfAllPokemons,
  },
};

export const getAllPokemons = () => {
  return axios(config)
    .then((response) => response.data.results)
    .catch((err) => console.log(err));
};

export const getPokemon = (name) => {
  return axios
    .get(`${baseUrl}/${name}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
};
