import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div>
      this are
      {pokemon.map((pokemon) => (
        <div key={pokemon}>{pokemon}</div>
      ))}
    </div>
  );
};

export default PokemonList;
