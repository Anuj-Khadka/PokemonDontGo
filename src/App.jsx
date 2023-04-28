import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        setPokemon(response.data.results.map((pokemon) => pokemon.name));
      })
      .catch((error) => error.message);
  }, []);

  return (
    <>
      <PokemonList pokemon={pokemon} />
    </>
  );
}

export default App;
