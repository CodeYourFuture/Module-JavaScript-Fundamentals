const movieLength = 8784; 
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);
//

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/* line 1 const movieLength  line 3 const remainingSeconds line 4 const totalMinutes
   line 6 const remainingMinutes line 7 const totalHours  line 9 const result*/

// b) How many function calls are there?
/* there are one function 
      console.log(result);*/

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
/*The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend*/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* This expression convert movies time second into minutes dividend by 60 second*/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* The variable represent the movieLength in second,minutes and hours. 
    We can change this name as movieTime*/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* In this section we can only use the positive natural numbers  but if we put numbers that divide by 60 without a remainder get the exact time like 10, 20 50 */
/*"Percent (%) is a way to describe the full amount of anything by imagining it split into 100 equal sections.*/
/*we take out the odd seconds before converting to minutes so that when we divide by 60 we can get the exact whole number instead of messy decimal so that*/