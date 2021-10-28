import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const config = {
  method: "get",
  url: baseUrl,
  params: {
    limit: 2000,
  },
};

export const getAllPokemons = () => {
  return axios(config)
    .then((response) => response.data.results)
    .catch((err) => console.log(err));
};
