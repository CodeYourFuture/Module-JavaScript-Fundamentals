// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
//const cityOfBirth = "Bolton";

/* When we try to run our code it is giving us an error saying ReferenceError: Cannot access 'cityOfBirth' before initialization
and this is because we tried to access the var cityOfBirth before we declared and initialized it*/

// We can overcome this error by declaring and initializing the var cityOfBirth before accessing it
