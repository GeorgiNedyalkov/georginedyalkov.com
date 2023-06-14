import { TbExternalLink } from "react-icons/tb";

import "./Game.css";

const Game = ({
  title,
  image,
  description,
  genre,
  gameLink,
  trailer,
  reviews,
}) => {
  return (
    <article className="game">
      <div className="game__image__container">
        <img src={image} alt={title + "image"} className="game__image" />
      </div>
      <div className="game__info__container">
        <p className="game__review">
          {reviews.count.toLocaleString()} reviews <br />({reviews.opinion})
        </p>
        <h3 className="game__title">{title}</h3>
        <p className="game__description">{description}</p>
        <p className="game__genre">Genre: {genre}</p>
        <div className="game__links__container">
          <ul className="game__links__list">
            <li className="game__link">
              <a href={gameLink}>Check it out</a>
              <TbExternalLink />
            </li>
            <li className="game__link">
              <a href={trailer}>Trailer</a>
              <TbExternalLink />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Game;
