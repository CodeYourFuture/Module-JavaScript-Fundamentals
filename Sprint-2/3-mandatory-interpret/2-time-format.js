const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//A--> There are 5 variable declarations

// b) How many function calls are there?
//A--> There are 4 function calls  in line 9 and 10

// c) Usings documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//A--> % is a modulo operator that return the remainder of a multiplied number 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* movieLength subtract the left over seconds from the total seconds(movieLength) to get a number that is divisible by 60
 when dividing by 60 would convert the remaining seconds into whole minutes which ensures there is no decimal in totalMinutes
*/
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//A--> results present length of movie formatted as Hours:Minutes:Seconds and a better name could be fromatedMovieDuration


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*whole positive value: for the 8789 seconds the formatted duration would be fine 2:26:24 and the code would be working as expected 
under 60 seconds: 59 seconds would assign the hours and minutes both as 0s resulting 0:0:59 instead of the normal formatted way 00:00:59 but still correct 
zero value: the formatted duration would also be correct 0:0:0 even though it is an unusual value it still show that it can handle it 
Negative value: for the -8789 seconds would give us an output of -2:-26:-29 which is not a valid format and doesn't make any sense
the logic breaks where we need to give the user a message to enter a valid number
*/
