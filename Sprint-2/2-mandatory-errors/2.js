// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// =============> ReferenceError: Cannot access 'cityOfBirth' before initialization
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
// =============> I fixed the error by moving the console.log() statement below the declaration of the cityOfBirth variable
