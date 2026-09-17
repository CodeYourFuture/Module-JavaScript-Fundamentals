const movieLength = 8784; // length of movie in seconds

// Test values tried:
// const movieLength = 9893;
// const movieLength = 223;
// const movieLength = 50;
// const movieLength = 345;
// const movieLength = 600;
// const movieLength = 400;
// const movieLength = 90;
// const movieLength = 189;

function movieFormatting(num) {
    if (num < 10) {
        return "0" + num.toString();
    } else {
        return num.toString();
    }
}

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${movieFormatting(totalHours)}:${movieFormatting(remainingMinutes)}:${movieFormatting(remainingSeconds)}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in the original program:
// movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There is 1 function call in the original program:
// console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// The % operator is the remainder operator. It returns the remainder after division.
// Here, movieLength % 60 gives the number of seconds left over after dividing
// the total movie length in seconds by 60.
// For example, with movieLength = 8784, the remainder is 24,
// so remainingSeconds is 24.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// First, remainingSeconds is subtracted from movieLength.
// This removes the leftover seconds and leaves a value that can be divided
// evenly by 60. The result is then divided by 60 to convert the seconds
// into the total number of whole minutes.
// For movieLength = 8784, totalMinutes is 146.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the movie duration in hours, minutes and seconds.
// A more descriptive variable name could be movieDurationHHMMSS.
// For movieLength = 8784, the formatted result is "02:26:24".

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// I tested the code with multiple values of movieLength, including:
// 9893, 223, 50, 345, 600, 400, 90 and 189.

// The original code works for the positive whole-number values I tested,
// but it does not always format the output in HH:MM:SS format.
// If the hours, minutes, or seconds are less than 10, for example 5 or 7,
// they are displayed as a single digit instead of two digits.

// I created the movieFormatting() function to add a leading 0 when a value
// is less than 10. Otherwise, the function returns the value as a string.
// I then tested the updated code with multiple movieLength values and
// the tested values produced the expected HH:MM:SS formatted output.