// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

// The error is a ReferenceError: Cannot access 'cityOfBirth' before initialization

//console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";

//The reason there is an error is because we are using the wrong order, we are telling Javascript to print the value of cityOfBirth before creating a variable.
//So we need to create the variable first, this is because Javascript runs code from top to bottom, so a variable that is declared with const needs to be declared before using it.

//right way

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
