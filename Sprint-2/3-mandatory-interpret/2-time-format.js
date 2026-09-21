// const movieLength = 8784; // length of movie in seconds

// const remainingSeconds = movieLength % 60;
// const totalMinutes = (movieLength - remainingSeconds) / 60;

// const remainingMinutes = totalMinutes % 60;
// const totalHours = (totalMinutes - remainingMinutes) / 60;

// const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
// console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // There are 6 variable declarations, lines 1,3,4,6,7,9

// b) How many function calls are there?
    //1 at line 10 

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
    //This is using a remainder, this us seeing how many times 8784 goes into 60 and what is remaining which is 24 in this case:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // It is the sum of movieLength minus remainingSeconds then divided by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // its showing the length of the movie in hours, minutes and seconds, could be better called something like MovieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    //Yes it will as long as the input is numerical numbers only, it does not work with any extra symbols, spaces or letters.
