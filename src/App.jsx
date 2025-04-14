import './App.css';
//css
import { PokemonList } from './components/PokemonList/PokemonList';
//components
import  data  from './components/data/pokemon.json';

function App() {
  return (
    <>
      <PokemonList pokemons={data} />
    </>
  );
}

export default App;
