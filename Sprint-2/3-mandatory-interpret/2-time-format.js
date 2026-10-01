const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) There are 6 variable declarations:
// movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours and result.

// b) There is 1 function call:
// console.log(result);

// c) movieLength % 60 gives the remainder after dividing movieLength by 60.
// This represents the number of seconds left after converting the rest into whole minutes.

// d) (movieLength - remainingSeconds) / 60 removes the leftover seconds
// and divides the remaining seconds by 60 to calculate the total number of whole minutes.

// e) result represents the movie length formatted as hours:minutes:seconds.
// A better variable name could be formattedMovieLength.

// f) The code works correctly for non-negative whole numbers of seconds.
// If movieLength contains a decimal value, the result may contain decimal seconds.
// Negative values would also not represent a normal movie duration.