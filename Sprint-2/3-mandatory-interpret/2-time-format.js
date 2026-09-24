const movieLength = -90.5; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  There are six variable declarations in the program, namely :
//  movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, result

// b) How many function calls are there?
// One function call console.log() in code above.
// The others are declared variables.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// % is remainder operator. This operator returns the remainder after left operand is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression means first exclude odd seconds, then convert the movie length in number of complete minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents length of movie in H:M:S format. A better variable name can be movieLength_HMS

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// A value of movieLength 3661 will return a result of 1:1:1 where the place value for second does not conforms with leading zero time format.
//The code does not work for all values:
//It does not pad single digits with a leading zero;
//It does not validate to reject negative (e.g.-90 gives "0:-1:-30" ; -90.5 gives "0:-1:-30.5") or decimal input.
