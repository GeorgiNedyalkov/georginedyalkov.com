import snatch from "../assets/images/snatch.jpg";
import revolver from "../assets/images/revolver.jpg";
import inglorious_basterds from "../assets/images/inglorious_basterds.jpg";
import boiling_point from "../assets/images/boiling_point.jpg";
import dark_knight_rises from "../assets/images/dark_knight_rises.jpg";
import star_wars from "../assets/images/star_wars.jpg";
import lotr from "../assets/images/lotr.jpg";

export const moviesData = [
    {
        id: 1,
        image: lotr,
        title: "Lord of the Rings",
        director: "Peter Jackson",
        plot: `A meek Hobbit from the Shire and eight companions set out on a 
    journey to destroy the powerful One Ring and 
    save Middle-earth from the Dark Lord Sauron.`,
        trailer: "https://www.imdb.com/video/vi684573465/?playlistId=tt0120737",
        imdbRating: 8.8,
    },
    {
        id: 2,
        image: snatch,
        title: "Snatch",
        director: "Guy Ritchie",
        plot: `Unscrupulous boxing promoters, violent bookmakers, 
    a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers 
    fight to track down a priceless stolen diamond.`,
        trailer:
            "https://www.imdb.com/video/vi1558577433/?playlistId=tt0208092",
        imdbRating: 8.2,
    },
    {
        id: 3,
        image: revolver,
        title: "Revolver",
        director: "Guy Ritchie",
        plot: `Gambler Jake Green enters into a game with potentially deadly consequences.`,
        trailer:
            "https://www.imdb.com/video/vi1621033241/?playlistId=tt0365686",
        imdbRating: 6.3,
    },
    {
        id: 4,
        image: inglorious_basterds,
        title: "Inglourious Basterds",
        director: "Quentin Tarantino",
        plot: `In Nazi-occupied France during World War II, 
    a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers 
    coincides with a theatre owner's vengeful plans for the same.`,
        trailer:
            "https://www.imdb.com/video/vi3738173977/?playlistId=tt0361748",
        imdbRating: 8.3,
    },
    {
        id: 5,
        image: boiling_point,
        title: "Boiling Point",
        director: "Philip Barantini",
        plot: `Enter the relentless pressure of a restaurant kitchen as a head chef 
    wrangles his team on the busiest day of the year.`,
        trailer:
            "https://www.imdb.com/video/vi479970073/?playlistId=tt11127680",
        imdbRating: 7.5,
    },
    {
        id: 6,
        image: dark_knight_rises,
        title: "The Dark Knight Rises",
        director: "Christopher Nolan",
        plot: `Eight years after the Joker's reign of chaos, 
    Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend 
    Gotham City from the vicious guerrilla terrorist Bane.`,
        trailer: "https://www.imdb.com/video/vi144884505/?playlistId=tt1345836",
        imdbRating: 8.4,
    },
    {
        id: 7,
        image: star_wars,
        title: "Star Wars: Return of the Jedi",
        director: "Richard Marquand",
        plot: `After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, 
    while Luke struggles to help Darth Vader back from the dark side.`,
        trailer:
            "https://www.imdb.com/video/vi1702936345/?playlistId=tt0086190",
        imdbRating: 8.3,
    },
];
