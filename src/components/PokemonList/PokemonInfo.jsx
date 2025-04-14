import PropTypes from "prop-types";
import css from "./PokemonInfo.module.css";

export const PokemonInfo = ({ name: { english }, base }) => {
  return (
    <div className={css.infoContainer}>
      <h2 className={css.title}>{english}</h2>
      <ul className={css.list}>
        {Object.keys(base).map((key) => (
          <li key={key}>
            <h3 className={css.valueTitle}>{key}</h3>
            <p className={css.text}>{base[key]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

PokemonInfo.propTypes = {
  name: PropTypes.string.isRequired,
  base: PropTypes.arrayOf(
    PropTypes.shape({
      HP: PropTypes.number.isRequired,
      Attack: PropTypes.number.isRequired,
      Defense: PropTypes.number.isRequired,
      "Sp. Attack": PropTypes.number.isRequired,
      "Sp. Defense": PropTypes.number.isRequired,
      Speed: PropTypes.number.isRequired,
    })
  ),
};
