import "./Movie.css";

const Movie = ({ title, director, plot, image, trailer, imdbRating }) => {
  return (
    <article className="movie">
      <div className="movie__image__container">
        <img className="movie__image" src={image} alt={`${title} cover`} />
      </div>
      <div className="movie__info">
        <h4 className="movie__title">{title}</h4>
        <p>
          Director: <span className="movie__director">{director}</span>
        </p>
        <p className="movie__plot">{plot}</p>
        <p>
          Rating: <span className="movie__rating">{imdbRating}⭐</span>
        </p>
        <a className="movie__btn" href={trailer}>
          Trailer
        </a>
      </div>
    </article>
  );
};

export default Movie;
