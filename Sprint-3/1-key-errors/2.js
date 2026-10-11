
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> Because the parameter needs to possess a name, i believe this will throw an error

function square(3) {
    return num * num;
}

// =============> SyntaxError: Unexpected number 

// =============> Because a parameter is a placeholder name for the function, it should receive a value when the function is called, it cant be a number.

// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
}
console.log(square(3));

