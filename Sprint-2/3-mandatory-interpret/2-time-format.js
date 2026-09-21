const movieLength = 90.5; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
/************************************************** */
/* Solution  a): There are 6 varibale declarations */
/************************************************* */

// b) How many function calls are there?
/**************************************************/
/* Solution  b):                                 */
/* There is only one fuction call (console.log() */
/*********************************************** */

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

/*********************************************************************************************************************/
/*Solution  c):                                                                                                      */
/*  The operator (%) called Modulo returns the remainder left over when one operand is divided by a second operand  */
/* In this expamle it gives the time remainder of the movie in seconds                                              */
/*********************************************************************************************************************/

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

/****************************************************************************************************************************************************************************/
/*  Solution  d):                                                                                                                                                           */
/*  The totalMinutes expression is calaculated first by subtrackting the lengh of movie by the reminder of seconds which rounds down the nearst minutes                     */
/* Since we know the total number of seconds that are multiple of 60 we can can calculate the total  number of minutes by dividing it over 60 since 1 minute is 60 seconds  */
/* This way we have the Movie total exact number of miutes.                                                                                                                 */
/****************************************************************************************************************************************************************************/

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*********************************************************************************************/
/* Solution  e):                                                                             */
/* The variable result represents the exact lenght of the movie in Hours + Minutes + Seconds */
/* A better name for  variable result  could be : extctMovieLength                           */
/*********************************************************************************************/

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

/***************************************************************************************************************************************************************/
/* Solution  e):                                                                                                                                          */
/*  movieLength = 0    => exactMovieLength = 0:0:0                                                                                                        */
/*  movieLength = 60   => exactMovieLength = 0:1:0                                                                                                        */
/*  movieLength  = 3676 => exactMovieLength = 1:1:16                                                                                                      */
/*  movieLength  = -3600 => exactMoveLenght = -1:0:0                                                                                                      */
/*  movieLength  = 90000 => exactMoveLenght = 25:0:0                                                                                                      */
/*                                                                                                                                                        */
/*  This code Could be better:                                                                                                                            */
/*  - giving a negative value for  movieLength will result in a negative clock: so there could have message that reject negative numbers.                 */
/*  - The program should have represented Hours/Min/Sec in this format 00:00:00 so each time should be represented with 2 digits.                         */
/*  - 25 hours exeeds 24 hours which represents a day so a variable total days could be added to represent time in days.                                  */
/*  -Values with dicimal numbers will return the clock showing dicimal numbers this should be rounded up or down to the nearst time with an integer number */
/*                                                                                                                                                        */
/**********************************************************************************************************************************************************/
