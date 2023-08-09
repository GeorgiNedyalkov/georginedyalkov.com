import Movie from "./Movie/Movie";

import "./Movies.css";

const Movies = ({ movies, currentMovieIndex, onMovieMouseOver }) => {
    return (
        <div className="about__section">
            <h3 className="about__heading">Movies and Shows</h3>
            <div className="movies">
                <div className="movies__section--left">
                    <Movie {...movies[currentMovieIndex - 1]} />
                </div>
                <div className="movies__section--right">
                    <ul className="movies__list">
                        {movies.map((movie) => {
                            return (
                                <li
                                    onMouseOver={() =>
                                        onMovieMouseOver(movie.id)
                                    }
                                    key={movie.id}
                                >
                                    <a className="link" href={movie.trailer}>
                                        {movie.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Movies;
