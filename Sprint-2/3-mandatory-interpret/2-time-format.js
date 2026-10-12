const movieLength = 8784; // length of movie in seconds
//not complete
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
// it represent the number of seconds left over after taking all the complete minutes

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//here in the expression we have the movieLength taken from it the number of remainingSeconds, so the operator / 60 represents the conversion of the remaining seconds into minuttes, so we left with complete minutes only
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//the variable result represesnt the length of the film in hours,minutes,and seconds. A better name would be movie time.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//8784
//if experimented values into the movieLength variable what will happen? Lets start with the following values:
//-10 , 0, 10 , 10000000, -1000000
//0:0:-10, 0:0:0,0:0:10,2777:46:40, -277:-46:-40
//ok I notice the result get strange with big negative numbers, so I think the code needs to be modified to restrict using negative values
