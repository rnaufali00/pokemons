import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemon from './pages/MyPokemon';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={PokemonList}/>
            <Route path="/myPokemon" component={MyPokemon}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
