// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

ReferenceError: Cannot access 'cityOfBirth' before initialization
JavaScript reads top to bottom, so at the point it hits that console.log, cityOfBirth doesn't exist yet.