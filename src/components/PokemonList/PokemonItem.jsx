import css from './PokemonItem.module.css';

export const PokemonItem = ({ pokemon, onClick }) => {
    return (
      <tr>
        <td className={css.text}>{pokemon.name.english}</td>
        <td className={css.text}>{pokemon.type.join(", ")}</td>
        <td>
          <button onClick={() => onClick(pokemon)}>More Information</button>
        </td>
      </tr>
    );
}
