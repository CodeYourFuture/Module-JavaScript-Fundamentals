// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//ok, according to javaScript rules or convention for variables, we can't start with a number
//I'm expecting a syntaxErrror because its against javaScript rules

//function square(3) {
// return num * num;
//}

// =============> write the error message here
//SyntaxError: Unexpected number
//not bad for a prediction-_-
// =============> explain this error message here
//it means javaCript can't identify what this number represent
//it's not part of the built in rules
// Finally, correct the code to fix the problem
//we just change number 3 to a the word three and assign its value to num
// =============> write your new code here
function square(three) {
  num = three;
  return num * num;
}
console.log(square(4));


//so far this sprint is easy-_-
