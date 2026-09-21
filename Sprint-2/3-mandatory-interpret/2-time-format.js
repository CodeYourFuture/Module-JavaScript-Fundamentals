const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// ─────────────────────────────────────────────────────────────
// QUESTION a) How many variable declarations?
// ANSWER: 7
//   Line 1  → movieLength
//   Line 3  → remainingSeconds
//   Line 4  → totalMinutes
//   Line 6  → remainingMinutes
//   Line 7  → totalHours
//   Line 9  → result
//   (console.log on Line 10 is a function call, not a declaration.)
//
// QUESTION b) How many function calls?
// ANSWER: 1 → console.log(result) on Line 10.
//
// QUESTION c) What does movieLength % 60 mean?
// ANSWER: % is the "remainder" operator. It tells you what's left over
//         after dividing by 60. Since there are 60 seconds in a minute,
//         the remainder is the seconds that don't fill a full minute.
//         Example: 8784 % 60 = 24 (so 24 seconds left over).
//
// QUESTION d) What does Line 4 do?
// ANSWER: Subtracts the leftover seconds first, then divides by 60.
//         Subtracting first avoids getting a decimal.
//         (8784 - 24) / 60 = 146 total minutes.
//
// QUESTION e) What does `result` represent?
// ANSWER: The movie length written as hours:minutes:seconds — the same
//         format YouTube and video players use. Useful for timers,
//         countdowns, workout apps, etc.
//
// QUESTION f) Does it work with different values?
// ANSWER: Yes. Tested values:
//         60    → 0:1:0
//         59    → 0:0:59
//         3661  → 1:1:1
//         3600  → 1:0:0
//         It works for any whole, positive number of seconds.
// ─────────────────────────────────────────────────────────────