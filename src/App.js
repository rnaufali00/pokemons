import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route, HashRouter} from 'react-router-dom';
import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import MyPokemon from './pages/MyPokemon/MyPokemon';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';


function App() {
  return (
    <HashRouter>
      <Header/>
      <div className="App m-4">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={PokemonList}/>
            <Route path="/myPokemon" component={MyPokemon}/>
            <Route path="/pokemon/:id" component={PokemonDetail}/>
            <Route component={PokemonList}/>
          </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
