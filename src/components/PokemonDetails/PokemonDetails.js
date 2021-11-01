import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemon } from "../../api/api";
import Card from "./components/Card";
import BackToMainButton from "./components/BackToMainButton";
import "./pokemonDetails.css";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  let { pokemonName } = useParams();

  console.log("pokemon name", pokemonName);

  useEffect(() => {
    const getPokemonDetails = async () => {
      const result = await getPokemon(pokemonName);
      setPokemon(result);
    };
    getPokemonDetails();
  }, [pokemonName]);

  return (
    <>
      <BackToMainButton />
      {pokemon ? (
        <Card pokemon={pokemon} />
      ) : (
        <div className="loader">is loading...</div>
      )}
    </>
  );
};

export default PokemonDetails;
