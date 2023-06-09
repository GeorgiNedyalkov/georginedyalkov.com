import { useState } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Game from "./Games/Game/Game";
import Books from "./Books/Books";

import { tracks } from "../../data/tracksList";
import { booksData } from "../../data/booksData";
import { gamesData } from "../../data/gamesData";

import "./About.css";
import { moviesData } from "../../data/moviesData";
import Movies from "./Movies/Movies";

const About = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [games, setGames] = useState(gamesData);
  const [books, setBooks] = useState(booksData);
  const [movies, setMovies] = useState(moviesData);
  const [currentGameIndex, setCurrentGameIndex] = useState(1);
  const [currentBookIndex, setCurrentBooksIndex] = useState(1);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(1);

  const onBookMouseOver = (bookId) => {
    setCurrentBooksIndex(bookId);
  };

  const onMovieMouseOver = (movieId) => {
    setCurrentMovieIndex(movieId);
  };

  const onGenreSelect = (index) => {
    setCurrentTrack(tracks[index]);
  };

  return (
    <div id="about-page">
      <div className="container">
        <h1>About me</h1>
        <p> Hi, I'm Georgi. Lovely to meet you!</p>

        <Excerpt />

        <h2>Favorites</h2>

        <div className="about__section">
          <h3 className="about__heading">Gaming</h3>
          <p>
            All time favorites, in no particular order, and highly recommended
            games:
          </p>
          <ul className="game__links">
            {games.map((game) => {
              return (
                <li
                  onClick={() => setCurrentGameIndex(game.id)}
                  className="game__link__list-item"
                  key={game.id}
                >
                  {game.title}
                </li>
              );
            })}
          </ul>
          <Game {...games[currentGameIndex - 1]} />
          <p>
            Currently adventuring in{" "}
            <a
              className="link"
              href="https://store.steampowered.com/app/228280/Baldurs_Gate_Enhanced_Edition/"
            >
              Baldur's Gate
            </a>
          </p>
        </div>

        <div className="about__section">
          <h3 className="about__heading">Books</h3>

          <Books
            books={books}
            onBookMouseOver={onBookMouseOver}
            currentBookIndex={currentBookIndex}
          />
        </div>

        <div className="about__section">
          <h3 className="about__heading">Movies and Shows</h3>

          <Movies
            movies={movies}
            currentMovieIndex={currentMovieIndex}
            onMovieMouseOver={onMovieMouseOver}
          />
        </div>

        <div className="about__section">
          <h3 className="about__heading">Music</h3>
          <p>Checkout one of my currently new favorite artists:</p>
          <ul className="genres">
            <li onClick={() => onGenreSelect(0)} className="genre rock">
              Rock
            </li>
            <li onClick={() => onGenreSelect(1)} className="genre hiphop">
              Hip Hop
            </li>
            <li onClick={() => onGenreSelect(2)} className="genre funk">
              Funk
            </li>
            <li onClick={() => onGenreSelect(3)} className="genre house">
              House
            </li>
          </ul>
        </div>
        <AudioPlayer
          tracks={tracks}
          currentTrack={currentTrack}
          trackIndex={trackIndex}
          setCurrentTrack={setCurrentTrack}
          setTrackIndex={setTrackIndex}
        />
        <div className="about__section">
          <h3 className="about__heading">Sports</h3>
          <ul>
            <li>Jiu Jitsu</li>
            <li>Break dancing</li>
            <li>Table soccer a.k.a ''Джага''</li>
            <li>Chess - 1.e4 with white; 1. ... c5 with black</li>
            <li>Backgammon</li>
            <li>Belotte</li>
            <li>Poker</li>
            <li>Football</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

const Excerpt = () => {
  return (
    <div>
      <p>
        For the past 6 years I have been working in the real estate industry as
        a sales agent and later marketing manager. At the same time I started
        learning how to code, because I wanted to be able to create things by
        myself.
      </p>
      <p>
        I started coding in may 2022. In the past year I have been learning how
        to program and began developing simple applications. I started with
        building a solid foundation in HTML5, CSS and JavaScript. Later I
        continued to learn React and now I am figuring out Redux.
      </p>
      <p>
        Currently a student in SoftUni with a one more semester of getting my
        degree. The course I am currently on focuses on deepening my knowledge
        on JavaScript with modules such as: arrays, objects and composition,
        classes, prototypes and inheritance, DOM manipulation and events,
        advanced functions, unit testing, etc. After which I have one more
        course where we will learn about JavaScript applications and concepts
        such as HTTP, REST services, async programming, authentication,
        architecture and testing, single page applications, routing, client side
        rendering and more.
      </p>
      <p>
        I have also taken a course on back-end development with node and build
        express applications. I learned about concepts like authorization,
        encryption, databases, CRUD operations, MVC framework.
      </p>
      <p>
        In my final year of university in 2017 I had to write a dissertation as
        my last project. At the same time my father introduced me to blockchain
        and cryptocurrencies This technology seemed fascinating to me and after
        that I have been learning all about crypto, blockchain technology,
        non-fungible tokens and the idea of decentralization itself. I have done
        a course in SoftUni and tested writing some smart contracts myself. It
        is one of the industries I am most excited about and would love to one
        day work in a project like this.
      </p>
    </div>
  );
};
