const movieLength = -9876; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions


// a) How many variable declarations are there in this program?
//There are six variable declarations in this program. The lines where variable declarations are made:
//1. Line 1: const movieLength = 8784;
//2. Line 3: const remainingSeconds = movieLength % 60;
//3. Line 4: const totalMinutes = (movieLength - remainingSeconds) / 60;
//4. Line 6: const remainingMinutes = totalMinutes % 60;
//5. Line 7: const totalHours = (totalMinutes - remainingMinutes) / 60;
//6. Line 9: const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
//There are two function calls in this program. The lines where function calls are made are:
//1. Line 9: `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
//2. Line 10: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//The expression "movieLength % 60" calculates the remainder when the value of "movieLength" is divided by 60. 
//In this context, it is used to determine the number of seconds remaining after converting the total movie 
//length from seconds into minutes. Since there are 60 seconds in a minute, this operation effectively gives us the 
//leftover seconds that do not make up a full minute. 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//The expression assigned to "totalMinutes" in line 4 calculates the total number of minutes in the movie length. 
//It does this by first subtracting the remaining seconds (calculated in line 3) from the total movie length in seconds. 
//This gives the total number of seconds that can be fully converted into minutes. Then, it divides that value by 60 to 
//convert the total seconds into total minutes. The result is the total number of complete minutes in the movie length, 
//excluding any leftover seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted time string in the format "hours:minutes:seconds".
// A better name for this variable could be "formattedTime" or "movieDuration" 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//The code will work for all positive integer values of movieLength, as it correctly calculates the hours, minutes, 
//and seconds based on the total length in seconds. But will not work for negative values of movieLength, 
//as it will produce negative hours, minutes, and seconds, which does not make sense in the context of a movie length.