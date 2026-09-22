const movieLength =  90.5; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//>6 variable Declarations, every const creates a new variable.

// b) How many function calls are there?
//>1 function calls is console.log() as it is a function being called and told to do the job

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//>movieLength % 60 means finding the remainder after dividing movieLength by 60. movieLength = 8784 so we need to do: 8784 % 60 = 146.4 and the nearest whole integer is 146. 
//So there are 146 complete groups of 60. we then multiply; 146 x 60= 8760 --> 8784 - 8760 = 24 so 8784 % 60 = 24 and therefore remainingSeconds becomes 24.
//8784/60 = 146.4. and 8784 % 60 = 24 as this is the remainder.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//>const totalMinutes = (movieLength - remainingSeconds) / 60 ---> if we break it down -> movieLength = 8784 remainingSeconds = 24
//we then subtract remainingSeconds from movieLength= 8784 -24 = 8670. we then have to divide it by 60 which gives us 8760 / 60 = 146. we divide because there is 60 seconds in one minute, and right now we are converting seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//>The result variable will show us he complete results from our calculations of = totalHours:remainingMinutes:remainingSeconds.
//result = 2:26:24

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//>I tested differnet codes: 7965 and I got the result 2:12:45 and i also tried : 2654 and got 0:44:14.

//> suggestions to run code - 59 gives us 0:0:59 > less than 60 seconds
//-90 gives us 0:-1:-30 - not valid as the code works properly for non-negative whole numbers
//90.5 gives us 0:1:30.5 > this tells us 60 goes into 90.5 once and 30.5 is the remainder 