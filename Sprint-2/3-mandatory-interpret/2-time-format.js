const movieLength = 90.5; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const movieDuration = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(movieDuration);

//A.There are six variable declarations

//B. one function call (console.log())

//C.The % represents a remainder. The operator returns the remainder leftover when one operand  which in
//  this cas is movieLength is divided by a second operand in this case 60%.

// D.it means it is changing the value that was in second into minute by dividing it 60 after the top
// calculation makes it whole number.

//E. It represents the duration of the movie.movieLength/ better name would be movieDuration.

//F. No it doesnt work for all different values , I experimented it with -ve numbers and decimals.It doesnt
//   give the desired output. For example if
//                                      const movieLength = -60;
//                                          movieDuration = 0:-1:0, there is no -ve value in time
//                                   if const movieLength = 90.5;
//                                          movieDuration = 0:1:30.5 the out put is decimal second.
