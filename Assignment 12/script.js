// Step 1: Create an array of favorite movies
let favoriteMovies = ["Inception", "The Matrix", "Interstellar"];

// Step 2: Add a new movie to the end of the array
favoriteMovies.push("The Dark Knight");
console.log(favoriteMovies); // ["Inception", "The Matrix", "Interstellar", "The Dark Knight"]

// Step 3: Remove the first movie from the array
favoriteMovies.shift();
console.log(favoriteMovies); // ["The Matrix", "Interstellar", "The Dark Knight"]

// Step 4: Add a new movie to the beginning of the array
favoriteMovies.unshift("Gladiator");
console.log(favoriteMovies); // ["Gladiator", "The Matrix", "Interstellar", "The Dark Knight"]

// Step 5: Remove the last movie from the array
favoriteMovies.pop();
console.log(favoriteMovies); // ["Gladiator", "The Matrix", "Interstellar"]
