// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;
console.log(age);

// This code returns a "TypeError: Assignment to constant variable.", because the variable age has been made constant and can't be manipulated.
// To solve the problem, we have to reassign the age variable from "const" to "let", that way it will allow for further manipulation and solve the error.