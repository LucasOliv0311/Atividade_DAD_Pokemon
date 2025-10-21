import "./card.css";

function Card({ pokemon }) {
  return (
    <div className="pokeCard">
      <h2>{pokemon.name}</h2>
      <p>Tipo - <i><strong>{pokemon.type}</strong></i></p>
      <p>Poder - <i><strong>{pokemon.power}</strong></i></p>
    </div>
  );
}

export default Card;
