const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

/* there are 6 variable declarations
const movieLength = 8784;
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;
const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;
const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;*/

// b) How many function calls are there?

/* there is one function call 
   console.log(result);*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//The % operator is called the modulus (remainder) operator.
//it means Divide movieLength by 60 and return the remainder

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//This means:Convert the total seconds into full minutes without the leftover seconds

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//A time format (hours:minutes:seconds) for the movie length, a better name would be movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//No, it will not work perfectly for all values.
//It does not add leading zeros (so you get 2:5:7 instead of 02:05:07)
//The format can look wrong for some numbers
