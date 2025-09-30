"use strict";

// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

// Den SMARTE måde - funktion der både genererer HTML og tilføjer til DOM!
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  // Tilføj direkte til DOM
  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet til DOM!`);
}
// ========== ASYNC MOVIE LOADER ==========

async function loadMovies() {
  console.log("🚀 Starter hentning af movie data...");

  // Vent på at få response fra serveren
  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );

  console.log("📡 Response modtaget:", response);

  // Vent på at konvertere response til JavaScript objekter
  const moviesFromJSON = await response.json();

  console.log("🎬 Movies fra JSON:", moviesFromJSON);
  console.log("📊 Antal movies:", moviesFromJSON.length);
  console.log("🎭 Første movie:", moviesFromJSON[0]);

  return moviesFromJSON;
}

// Kald funktionen
loadMovies();

// Test din eksisterende funktion med JSON data
async function testDisplayMovie() {
  console.log("🧪 Tester displayMovie med JSON data...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const moviesFromJSON = await response.json();

  // Vis første movie som test
  displayMovie(moviesFromJSON[0]);
  console.log("✅ Test fuldført - det virkede!");
}

// Kør testen
testDisplayMovie();

// Kør testen
testDisplayMovie();

// ========== DISPLAY ALL MOVIES ==========

function displayMovies(movieArray) {
  // Ryd container først
  movieListContainer.innerHTML = "";

  console.log(`🎬 Viser ${movieArray.length} movies...`);

  // Loop gennem alle movies
  for (const movie of movieArray) {
    displayMovie(movie); // Samme funktion til alt!
  }

  console.log(`🎉 ${movieArray.length} movies vist successfully!`);
}

// ========== MAIN ASYNC FUNCTION ==========

async function loadMovies() {
  console.log("🌐 Henter alle movies fra JSON...");

  const response = await fetch(
    "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json"
  );
  const moviesFromJSON = await response.json();

  console.log("📊 JSON data modtaget:", moviesFromJSON.length, "movies");

  // Vis alle movies fra JSON!
  displayMovies(moviesFromJSON);
}

// Start processen
loadMovies();

function displayMovie(movieObject) {
  const genreString = movieObject.genre.join(", ");
  const actorsString = movieObject.actors.join(", "); // Ny linje!

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
        <p class="movie-actors"><strong>Stars:</strong> ${actorsString}</p>
      </div>
    </article>
  `;

  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
}
// Tilføj description som data attribut for senere brug
const movieHTML = `
  <article class="movie-card" tabindex="0" data-description="${movieObject.description}">
    <!-- ... resten af HTML ... -->
  </article>
`;
// ========== MOVIE OBJECTS ==========

// Movie 1: Barbie
//const BarbieMovie = {
//id: 1,
//title: "Barbie",
//year: 2023,
//genre: ["Adventure", "Comedy", "Fantasy"],
//rating: 7.0,
//director: "Greta Gerwig",
//image:
//"https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
//actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
//description:
//"Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
//};

// Movie 2: Dune
//const DuneMovie = {
//id: 2,
//title: "Dune",
//year: 2021,
//genre: ["Adventure", "Drama", "Sci-Fi"],
//rating: 8.0,
//director: "Denis Villeneuve",
//image:
//"https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
//actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
//description:
//"Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
//};

// Movie 3: Dune: Part Two
//const DuneTwoMovie = {
//id: 3,
//title: "Dune: Part Two",
//year: 2024,
//genre: ["Action", "Adventure", "Drama"],
//rating: 8.7,
//director: "Denis Villeneuve",
//image:
//"https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
//actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
//description:
//"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
//};

//const EverythingEverywhereAllatOnceMovie = {
//id: 4, // Unikt nummer for filmen
//title: "Everything Everywhere All at Once",
//year: 2022, // Number, ikke string!
//genre: ["action", "adventure", "comedy"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 7.8, // Number (kan have decimaler)
//director: "Daniel Kwan, Daniel Scheinert",
//image:
//"https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", // URL til poster billede
//actors: ["Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis"], // Array med skuespillere
//description:
//"A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.", // Kort beskrivelse af filmen
//};

//const FightClubMovie = {
//id: 5, // Unikt nummer for filmen
//title: "Fight Club",
//year: 1999, // Number, ikke string!
//genre: ["drama"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.8, // Number (kan have decimaler)
//director: "David Fincher",
//image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg", // URL til poster billede
//actors: ["Brad Pitt, Edward Norton, Meat Loaf"], // Array med skuespillere
//description:
//"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", // Kort beskrivelse af filmen
//};

//const ForrestGumpMovie = {
//id: 6, // Unikt nummer for filmen
//title: "Forrest Gump",
//year: 1999, // Number, ikke string!
//genre: ["drama", "romance"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.8, // Number (kan have decimaler)
//director: "Robert Zemeckis",
//image:
//"https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", // URL til poster billede
//actors: ["Tom Hanks, Robin Wright, Gary Sinise"], // Array med skuespillere
//description:
//"The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.", // Kort beskrivelse af filmen
//};

//const GoodfellasMovie = {
//id: 7, // Unikt nummer for filmen
//title: "Goodfellas",
//year: 1990, // Number, ikke string!
//genre: ["biography", "drama", "crime"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.7, // Number (kan have decimaler)
//director: "Martin Scorsese",
//image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg", // URL til poster billede
//actors: ["Robert De Niro, Ray Liotta, Joe Pisci"], // Array med skuespillere
//description:
//"The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.", // Kort beskrivelse af filmen
//};

//const InceptionMovie = {
//id: 8, // Unikt nummer for filmen
//title: "Inception",
//year: 2010, // Number, ikke string!
//genre: ["action", "adventure", "sci-fi"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.8, // Number (kan have decimaler)
//director: "Christopher Nolan",
//image:
//"https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", // URL til poster billede
//actors: ["Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page"], // Array med skuespillere
//description:
//"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", // Kort beskrivelse af filmen
//};

//console.log("✅ Movie objects loaded and ready for DOM manipulation!");

// Find movie list container (gør det én gang)
//const movieListContainer = document.querySelector("#movie-list");

// I stedet for mange separate variabler, definer alt data direkte i arrayet!
//const movies = [
//{
//id: 1,
//title: "Barbie",
//year: 2023,
//genre: ["Adventure", "Comedy", "Fantasy"],
//rating: 7.0,
//director: "Greta Gerwig",
//image:
//"https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
//actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
//description:
//"Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world.",
//},
//{
//id: 2,
//title: "Dune",
//year: 2021,
//genre: ["Adventure", "Drama", "Sci-Fi"],
//rating: 8.0,
//director: "Denis Villeneuve",
//image:
//"https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
//actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
//description:
//"Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice.",
//},
//{
//id: 3,
//title: "Dune: Part Two",
//year: 2024,
//genre: ["Action", "Adventure", "Drama"],
//rating: 8.7,
//director: "Denis Villeneuve",
//image:
//"https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
//actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
//description:
//"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
//},
//{
//id: 4, // Unikt nummer for filmen
//title: "Everything Everywhere All at Once",
//year: 2022, // Number, ikke string!
//genre: ["action", "adventure", "comedy"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 7.8, // Number (kan have decimaler)
//director: "Daniel Kwan, Daniel Scheinert",
//image:
//"https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", // URL til poster billede
//actors: ["Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis"], // Array med skuespillere
//description:
//"A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.", // Kort beskrivelse af filmen
//},
//{
//id: 5, // Unikt nummer for filmen
//title: "Fight Club",
//year: 1999, // Number, ikke string!
//genre: ["drama"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.8, // Number (kan have decimaler)
//director: "David Fincher",
//image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg", // URL til poster billede
//actors: ["Brad Pitt, Edward Norton, Meat Loaf"], // Array med skuespillere
//description:
//"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", // Kort beskrivelse af filmen
//},
//{
//id: 6, // Unikt nummer for filmen
//title: "Forrest Gump",
//year: 1999, // Number, ikke string!
//genre: ["drama", "romance"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.8, // Number (kan have decimaler)
//director: "Robert Zemeckis",
//image:
//"https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", // URL til poster billede
//actors: ["Tom Hanks, Robin Wright, Gary Sinise"], // Array med skuespillere
//description:
//"The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.", // Kort beskrivelse af filmen
//},
//{
//id: 7, // Unikt nummer for filmen
//title: "Goodfellas",
//year: 1990, // Number, ikke string!
//genre: ["biography", "drama", "crime"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.7, // Number (kan have decimaler)
//director: "Martin Scorsese",
//image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg", // URL til poster billede
//actors: ["Robert De Niro, Ray Liotta, Joe Pisci"], // Array med skuespillere
//description:
//"The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.", // Kort beskrivelse af filmen
//},
//{
//id: 8, // Unikt nummer for filmen
//title: "Inception",
//year: 2010, // Number, ikke string!
//genre: ["action", "adventure", "sci-fi"], // Array med genres, f.eks. ["Action", "Drama"]
//rating: 8.8, // Number (kan have decimaler)
//director: "Christopher Nolan",
//image:
//"https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", // URL til poster billede
//actors: ["Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page"], // Array med skuespillere
//description:
//"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.", // Kort beskrivelse af filmen
//},
//{
//id: 8,
//title: "The Matrix",
//year: 1999,
//genre: ["Action", "Sci-Fi"],
//rating: 8.7,
//director: "Lana & Lilly Wachowski",
//image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
//actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
//description:
//"A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
//},
// Tilføj resten af dine movies her...
//];

//console.log("Movies array:", movies);
//console.log("Antal movies:", movies.length);

// Nu kan vi tilgå movies via array indeks
//console.log("Første movie:", movies[0]); // Barbie
//console.log("Anden movie:", movies[1]); // Dune
//console.log("Sidste movie:", movies[movies.length - 1]); // Inception

// Tilføj kun de første 3 movies via array indeks
//displayMovie(movies[0]); // Barbie
//displayMovie(movies[1]); // Dune
//displayMovie(movies[2]); // Dune: Part Two

//console.log("3 movies tilføjet via array indeks!");

// Kan vi bruge et loop! (den moderne måde)
//movieListContainer.innerHTML = ""; // Ryd først

// For-of loop - gå gennem hver movie i arrayet
//for (const movie of movies) {
//displayMovie(movie);
//console.log(`Tilføjet movie: ${movie.title}`);
//}

//console.log("Alle movies tilføjet via for-of loop! 🎉");

// Den ultimative funktion - vis alle movies i ét kald!
//function displayMovies(movieArray) {
// Ryd container først
//movieListContainer.innerHTML = "";

// Loop gennem alle movies og vis dem (bruger for-of loop!)
//for (const movie of movieArray) {
//displayMovie(movie);
//console.log(`${movie.title} displayed`);
//}

//console.log(`🎉 ${movieArray.length} movies displayed successfully!`);
//}

// Test den ultimative funktion
//displayMovies(movies);

//const myFavoriteMovie = {
//id: 10,
//title: "Song of the Sea",
//year: 2014,
//genre: ["Fairytale", "Adventure"],
//rating: 8.0,
//director: "Tomm Moore",
//image:
//"https://resizing.flixster.com/s7SUxMLL31PLkJE7dmVqZyHXqOs=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11260190_p_v8_bf.jpg",
//actors: ["David Rawle", "Brendan Gleeson", "Lisa Hannigan"],
//description:
//"Ben, a young Irish boy, and his little sister Saoirse, a girl who can turn into a seal, go on an adventure to free the fairies and save the spirit world.",
//};

// Tilføj til array og vis alle
//movies.push(myFavoriteMovie);
//displayMovies(movies);

//console.log(`Nu vises ${movies.length} movies!`);

// Test hvordan du får adgang til movie data
//console.log("=== TESTING MOVIE OBJECTS ===");

//console.log("Barbie title:", BarbieMovie.title);
//console.log("Dune year:", DuneMovie.year);
//console.log("Fight Club rating:", FightClubMovie.rating);
//console.log("Inception director:", InceptionMovie.director);

// Opret beskeder med movie data
//console.log(
//  `${BarbieMovie.title} (${BarbieMovie.year}) - Rating: ⭐ ${BarbieMovie.rating}`
//);
//console.log(`${DuneMovie.title} er instrueret af ${DuneMovie.director}`);
//console.log(
//  `${FightClubMovie.title} er fra ${FightClubMovie.year} og har rating ${FightClubMovie.rating}`
//);

// Du kan nu programmatisk arbejde med data:

// Ændre rating
//BarbieMovie.rating = 7.5;
//console.log("Updated Barbie rating:", BarbieMovie.rating);

// Tilføje ny property
//BarbieMovie.watched = true;
//console.log("Barbie movie with watched status:", BarbieMovie);

// Beregne movie alder
//const currentYear = new Date().getFullYear();
//const barbieAge = currentYear - BarbieMovie.year;
//console.log(`${BarbieMovie.title} er ${barbieAge} år gammel`);
//Test funktionen
//displayMovie(BarbieMovie);
// Ryd container først
//movieListContainer.innerHTML = "";
//Tilføj movies med ÉN linje hver (så nemt!)
//displayMovie(BarbieMovie);
//displayMovie(DuneMovie);
//displayMovie(DuneTwoMovie);
//displayMovie(EverythingEverywhereAllatOnceMovie);
//displayMovie(FightClubMovie);
//displayMovie(ForrestGumpMovie);
//displayMovie(GoodfellasMovie);
//displayMovie(InceptionMovie);
//console.log("3 movies tilføjet med kun 3 linjer kode!");
// Nu kan du:
// 1. Tilføje en movie med ÉN linje (funktionen gør ALT arbejdet!)
//displayMovie(BarbieMovie);
// 2. Ændre designet ÉT sted (i funktionen) og alle movies opdateres
// 3. Nemt teste med nye data
//const testMovie = {
//id: 999,
//title: "Test Film",
//year: 2024,
//genre: ["Test", "Genre"],
//rating: 9.9,
//director: "Test Director",
//image: "",
//actors: ["Test Actor"],
//description: "This is a test movie description.",
//};
//displayMovie(testMovie);
// Opret et nyt movie object
//const myFavoriteMovie = {
//id: 9,
//title: "The Matrix",
//year: 1999,
//genre: ["Action", "Sci-Fi"],
//rating: 8.7,
//director: "Lana & Lilly Wachowski",
//image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
//actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
//description:
// "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
//};
// Tilføj det til dit layout - så nemt!
//displayMovie(myFavoriteMovie);
