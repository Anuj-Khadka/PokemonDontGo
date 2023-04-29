import React from "react";

const PokemonList = ({pokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemon.map((pokemon) => (
      div key={pokemon}>{pokemon}</div>
      ))}
    </div>
  );
};

export default PokemonList;
