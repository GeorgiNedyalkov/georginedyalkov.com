const APIkey = "&apikey=5b21137e";

export const getMovie = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
  return data;
};

export const getMovies = async (queries) => {
  let movies = [];

  for (let query of queries) {
    const response = await fetch(`http://www.omdbapi.com/${query}${APIkey}`);
    const data = await response.json();
    movies.push(data);
  }

  return movies;
};

/*
Title: 'Pulp Fiction',
    Year: '1994',
    Rated: 'R',
    Released: '14 Oct 1994',
    Runtime: '154 min',
    Genre: 'Crime, Drama',
    Director: 'Quentin Tarantino',
    Writer: 'Quentin Tarantino, Roger Avary',
    Actors: 'John Travolta, Uma Thurman, Samuel L. Jackson',
    Plot: 
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    Language: 'English, Spanish, French',
    Country: 'United States',
    Awards: 'Won 1 Oscar. 70 wins & 75 nominations total',
    Poster: 
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
      { Source: 'Internet Movie Database', Value: '8.9/10' }, { Source: 'Rotten Tomatoes', Value: '92%' }, { Source: 'Metacritic', Value: '95/100' },
      
    ],
    Metascore: '95',
    imdbRating: '8.9',
    imdbVotes: '2,110,312',
    imdbID: 'tt0110912',
    Type: 'movie',
    DVD: '20 Aug 2002',
    BoxOffice: '$107,928,762',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True'
  }
*/
