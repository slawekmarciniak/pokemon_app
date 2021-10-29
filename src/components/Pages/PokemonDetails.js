import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../../api/api";
import Card from "./Card";
import "./pokemonDetails.css";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  let { pokemonName } = useParams();

  useEffect(() => {
    const getPokemonDetails = async () => {
      const result = await getPokemon(pokemonName);
      setPokemon(result);
    };
    getPokemonDetails();
  }, [pokemonName]);

  return <>{pokemon ? <Card pokemon={pokemon} /> : <p>is loading...</p>}</>;
};

export default PokemonDetails;
