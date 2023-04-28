import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setNextPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [previousPageUrl, setPreviousPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((response) => {
        setLoading(false);
        setPokemon(
          response.data.results.map((pokemon) => pokemon.name)
        );
        setNextPageUrl(response.data.next);
        setPreviousPageUrl(response.data.previous);
      })
      .catch((error) => error.message);

    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  const goToPrevPage = () => setCurrentPageUrl(previousPageUrl);
  const goToNextPage = () => setCurrentPageUrl(nextPageUrl);

  if (loading) return "Loading....";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={previousPageUrl ? goToPrevPage : null}
      />
    </>
  );
}

export default App;
