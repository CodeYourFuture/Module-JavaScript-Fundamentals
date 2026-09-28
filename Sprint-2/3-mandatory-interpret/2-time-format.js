const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 declarations
// b) How many function calls are there?
// 1 function call in line 10
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// "operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend."
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// it means the number of minutes in a film is calculated by calculating the number of seconds in the film
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//the variable result represesnt the length of the film in hours,minutes,and seconds. A better name would be movie time.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//  However, it doesn't work when the leading number of a decimal is zero like this 08784 because it interpreted as octal literal and 8 can't work in octal numeration 
//"The octal number system is a base-8 math and computing system that uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7"