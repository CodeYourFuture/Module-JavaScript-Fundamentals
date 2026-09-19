const movieLength = 3000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);




//A.There are six variable declararions

//B. no function calls

// C.The % represents a remainder. The operator returns the remainder leftover when one operand  which in
    //  this cas is movieLength is divided by a second operand in this case 60%.


// D.it means it is changing the value that was in second into minute by dividing it 60 after the top calculation makes it whole number.

//E. It represents the duration of the movie.movieLength/movieDuration.
 
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
  
// yes it works, i experimented it with various values. I found it to be working properly.