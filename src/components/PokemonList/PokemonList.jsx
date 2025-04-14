import css from "./PokemonList.module.css";
import PropTypes from "prop-types";
import { PokemonItem } from "./PokemonItem";
import { PokemonInfo } from "./PokemonInfo";
import React from "react";

export const PokemonList = ({ pokemons }) => {
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);
  return (
    <div>
      <table className={css.table}>
        <thead className={css.tableTitleWrap}>
          <tr>
            <th className={css.tableTitle}>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.slice(0, 20).map((item) => (
            <PokemonItem
              key={item.id}
              pokemon={item}
              onClick={(pokemon) => selectedPokemonSet(pokemon)}
            />
          ))}
        </tbody>
      </table>
      {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
