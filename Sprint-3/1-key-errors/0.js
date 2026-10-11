// Predict and explain first...
//  =============>The function will return capital S because the first letter of the str variable was capitalised with the toUpperCase method

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// The str identifier has already been declared in the function parameter and cannot be declared anywhere else inside the function as a variable

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


// =============> write your explanation here
// When a parameter is declared in a function, it causes an Error if it is declared inside the function as a variable, either you change the name used for the instructions or remove let 
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));