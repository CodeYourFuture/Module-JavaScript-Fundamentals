// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// Error:** `ReferenceError: Cannot access 'cityOfBirth' before initialization (at 2.js:4:30)`

// Cause:** Line 4 is trying to use `cityOfBirth` before the variable has been created. The variable is only declared on line 5, and JavaScript processes the code from top to bottom.

// Fix:** Declare and assign `cityOfBirth` before using it in the code.
