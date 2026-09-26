const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    //6
// b) How many function calls are there?
    //1
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//takes the length of movie and gives the remainder after deviding the length by 60
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// By first subtracting the exact remainder of seconds, the code ensures the remaining number is perfectly divisible by 60
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//gives the length of movie of split into hh:mm:ss, i can maybe give it name "duration"
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//it will not work for values that are negavtives and decimals

