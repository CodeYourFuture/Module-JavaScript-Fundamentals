const movieLength = 8784;
// const movieLength = -1;  
// const movieLength = 8784.5; 
// const movieLength = 'abc';
// const movieLength = 3605;
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* line 1 const movieLength  line 3 const remainingSeconds line 4 const totalMinutes
   line 6 const remainingMinutes line 7 const totalHours  line 9 const result*/

// b) How many function calls are there?
/* there are one function 
      console.log(result);*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/*The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. movieLength % 60 represent that when movieLength is divided by 60 it return the remainder.
It's mainly represent the remainingSeconds.*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* This expression convert movies time second into minutes dividend by 60 second*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* The variable represent the formatted movieLength in second,minutes and hours. 
    We can change this name as movieTime*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* No, it's does not work for all values. It works correctly for any non-negative whole number of seconds.
1. Negative Number: -1 gives the answer 0:0:-1 which is not the valid time because -1 is not the time formate.
due to the divide the dividend keeps the negatives seconds.
2. Decimals: Move length: 8784.5 gives the answer 2:26:24.5. So, seconds are not a whole numbers in real world.
3. Not a numbers: move length: 'abc'.. When we put the not numbers then they gives the NaN:NaN:NaN(Not a Number) answer.
4. also when we divide the numbers like 3605 its shows the answer 1:0:5 but it needs to shows 1:00:05. Its the problem of formating.
Values that divide by 60 with no remainder (like 120) also work; they just give 0 seconds (0:2:0).
for normal values like 8784 it's shows the correct answer. Its work normally for normal values but shows Nan and formating error for others values.  */