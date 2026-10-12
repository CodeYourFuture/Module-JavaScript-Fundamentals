// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
//The variable was declared after the print function, so the program doesn't know what is cityofBirth. Therefore, it can't perform the print function or execute before declaring the variable

//to solve this, we reverse the order of both lines so the declaration comes before the print functions

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
