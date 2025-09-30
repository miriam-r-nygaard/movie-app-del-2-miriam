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
//const movieHTML = `
//<article class="movie-card" tabindex="0" data-description="${movieObject.description}">
//<!-- ... resten af HTML ... -->
//</article>
//`;
