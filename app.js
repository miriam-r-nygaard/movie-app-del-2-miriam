"use strict";
// ========== MOVIE OBJECTS ==========

// Movie 1: Barbie
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig",
  image:
    "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
};

console.log("Barbie movie object:", barbieMovie);

// Movie 2: Dune
const duneMovie = {
  id: 2,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image:
    "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
};

console.log("Dune movie object:", duneMovie);

// Movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 3,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
};

console.log("Dune: Part Two movie object:", duneTwoMovie);

const EverythingEverywhereAllatOnce = {
  id: 4, // Unikt nummer for filmen
  title: "Everything Everywhere All at Once",
  year: 2022, // Number, ikke string!
  genre: ["action", "adventure", "comedy"], // Array med genres, f.eks. ["Action", "Drama"]
  rating: 7.8, // Number (kan have decimaler)
  director: "Daniel Kwan, Daniel Scheinert",
  image:
    "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", // URL til poster billede
  actors: ["Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis"], // Array med skuespillere
  description:
    "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.", // Kort beskrivelse af filmen
};

console.log(
  "Everything Everywhere All at Once movie object:",
  EverythingEverywhereAllatOnce
);

const FightClub = {
  id: 5, // Unikt nummer for filmen
  title: "Fight Club",
  year: 1999, // Number, ikke string!
  genre: ["drama"], // Array med genres, f.eks. ["Action", "Drama"]
  rating: 8.8, // Number (kan have decimaler)
  director: "David Fincher",
  image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg", // URL til poster billede
  actors: ["Brad Pitt, Edward Norton, Meat Loaf"], // Array med skuespillere
  description:
    "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", // Kort beskrivelse af filmen
};

console.log("Fight Club movie object:", FightClub);

const ForrestGump = {
  id: 6, // Unikt nummer for filmen
  title: "Forrest Gump",
  year: 1999, // Number, ikke string!
  genre: ["drama", "romance"], // Array med genres, f.eks. ["Action", "Drama"]
  rating: 8.8, // Number (kan have decimaler)
  director: "Robert Zemeckis",
  image:
    "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", // URL til poster billede
  actors: ["Tom Hanks, Robin Wright, Gary Sinise"], // Array med skuespillere
  description:
    "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.", // Kort beskrivelse af filmen
};

console.log("Forrest Gump movie object:", ForrestGump);

const Goodfellas = {
  id: 7, // Unikt nummer for filmen
  title: "Goodfellas",
  year: 1990, // Number, ikke string!
  genre: ["biography", "drama", "crime"], // Array med genres, f.eks. ["Action", "Drama"]
  rating: 8.7, // Number (kan have decimaler)
  director: "Martin Scorsese",
  image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg", // URL til poster billede
  actors: ["Robert De Niro, Ray Liotta, Joe Pisci"], // Array med skuespillere
  description:
    "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.", // Kort beskrivelse af filmen
};

console.log("Goodfellas movie object:", Goodfellas);

const Inception = {
  id: 7, // Unikt nummer for filmen
  title: "Inception",
  year: 2010, // Number, ikke string!
  genre: ["action", "adventure", "sci-fi"], // Array med genres, f.eks. ["Action", "Drama"]
  rating: 8.8, // Number (kan have decimaler)
  director: "Christopher Nolan",
  image:
    "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", // URL til poster billede
  actors: ["Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page"], // Array med skuespillere
  description:
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", // Kort beskrivelse af filmen
};

console.log("Inception movie object:", Inception);
