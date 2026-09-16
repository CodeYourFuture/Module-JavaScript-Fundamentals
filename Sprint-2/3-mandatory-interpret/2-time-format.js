const movieLength = 145678; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// 6

// b) How many function calls are there?

// 1, console.log(result) on line 10

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// % is the remainder arithmetic operator. The expression gives the remainder after the number of seconds
// the movie is long is divided by 60. After you have the full amount of minutes this is the amount of
// remaining seconds that don't add up to a full minute.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// removing remainingSeconds from movieLength leaves a number of seconds, slightly shorter than the movie length,
// that are an exact amount of minutes. It is divisible by 60. Dividing that number by 60 gives the exact
// number of minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// It represents the movie length as a string expressed in hours, minutes and seconds. A different name could
// be moiveLengthDestructured, movieLengthMessage, movieLengthInHMS, movieLengthFormatted, movieLengthTimeFormat

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// It technically works for all movie lengths, but the format gets weird. when a value is a single digit, you
// would expect 05 or 00, but it just says 5 or 0 which isn't a standard way to show time. Also, when the
// hours go above 24 you would expect it to start counting days, but the hours just add up instead as
// you try higher values.
