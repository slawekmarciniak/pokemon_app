import { useEffect, useState } from "react";
import { getAllPokemons } from "./components/api/api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    const getPokemons = async () => {
      const result = await getAllPokemons();
      setPokemons(result);
    };
    getPokemons();
  }, []);

  console.log(pokemons);
  return (
    <Router>
      <div className="App">
        <Route path="/">
          {pokemons ? <List data={pokemons} /> : "loading"}
        </Route>
      </div>
    </Router>
  );
};
export default App;
