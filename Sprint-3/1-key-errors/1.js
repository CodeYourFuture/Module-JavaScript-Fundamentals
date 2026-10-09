// Predict and explain first...

// Why will an error occur when this program runs?

// =============> write your prediction here
//this has the same issue as the one I encountered in the previous example. decimalNumber is declared twice
//so I'm expecting a syntaxError, the identifier decimalNumber has been declared twice
// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
// const decimalNumber = 0.5;
// const percentage = `${decimalNumber * 100}%`;

// return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
//the solution is to make the variable declared only once as a parameter
//  and than remove the declaration from line 11 by removing let and reassigning its value
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.8));
//ok I had to correct my solution because a reference error is caused by
//calling a parameter that only identified inside the function
//the solution would be to change line 18 to call the function and input
//input the value we want to convert because no point of declaring identifier twice
//what I notice by connicting both examples: the previous example the identifier was declared twice inside the function which caused a syntaxError
//in this example there is also declaring identifier that only identified inside a function , so the program doesn't recognise it which cause
//cause a reference error

