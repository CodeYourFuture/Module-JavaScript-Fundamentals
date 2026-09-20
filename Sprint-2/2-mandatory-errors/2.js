// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// the variable was initially declared after console.log so it threw an error message. The error message "cannot access 'cityOfBirth' before initialization at Object" is saying that javascript cannot access the variable before it has been initialised. I have initialised the variable on line 3 now so the message prints in the console now.
