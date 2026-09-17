// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

// The error occurs because cityOfBirth is accessed before it has been initialized.
// Variables declared with const cannot be accessed before their declaration is executed.
// This causes a ReferenceError because the variable is in the Temporal Dead Zone (TDZ).
// Moving the declaration before console.log fixes the error because cityOfBirth has a value before it is used.