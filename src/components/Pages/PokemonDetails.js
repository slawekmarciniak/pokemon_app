import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PokemonDetails = () => {
  let { pokemonName } = useParams();

  useEffect(() => {
    console.log(pokemonName);
  }, []);

  return <p>details</p>;
};

export default PokemonDetails;
