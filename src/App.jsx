import { useState } from 'react';
import './App.css';
import Form from './components/form/form.jsx';
import Card from './components/card/card.jsx';

function App() {
  const [pokemons, setPokemons] = useState([]);

  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  return (
    <>
      <Form onSubmit={handleAddPokemon} />
      <div className="cards">
        {pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

export default App;
