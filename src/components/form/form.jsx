import { useState } from 'react';
import styles from './form.module.css';

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [power, setPower] = useState(0);

  function submit(e) {
    e.preventDefault();

    const newPokemon = {
      name,
      type,
      power: Number(power)
    };

    onSubmit(newPokemon);

    alert("Pokémon cadastrado!");

    setName("");
    setType("");
    setPower(0);
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <h1>Cadastrar Pokémon</h1>

      <div className={styles.fieldContainer}>
        <span>Nome:</span>
        <input
          type="text"
          placeholder="Nome"
          className={styles.field}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.fieldContainer}>
        <span>Tipo:</span>
        <select
          className={styles.field}
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="Normal">Normal</option>
          <option value="Fogo">Fogo</option>
          <option value="Água">Água</option>
          <option value="Gelo">Gelo</option>
          <option value="Terrestre">Terrestre</option>
          <option value="Voador">Voador</option>
          <option value="Lutador">Lutador</option>
        </select>
      </div>

      <div className={styles.fieldContainer}>
        <span>Poder:</span>
        <input
          type="number"
          placeholder="Poder"
          className={styles.field}
          required
          min={0}
          max={100}
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />
      </div>

      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
}

export default Form;