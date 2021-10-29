import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetails from "./components/Pages";
import Header from "./components/Header";
import List from "./components/List";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/:pokemonName">
            <PokemonDetails />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
