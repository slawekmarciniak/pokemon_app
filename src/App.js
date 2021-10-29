import { useEffect, useState } from "react";
import { getAllPokemons } from "./api/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetails from "./components/Pages";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";
import "./app.css";

const App = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    const getPokemons = async () => {
      const result = await getAllPokemons();
      setPokemons(result);
    };
    getPokemons();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/:pokemonName">
            <PokemonDetails />
          </Route>
          <Route path="/">
            {/* <Search /> */}
            {pokemons ? <List data={pokemons} /> : "loading"}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
