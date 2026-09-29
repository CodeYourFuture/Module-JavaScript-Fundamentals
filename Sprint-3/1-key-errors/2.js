
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// Prediction: Node will report a SyntaxError because a number cannot be used
// as a function parameter name.

// Faulty original: function square(3) { return num * num; }

// Error: SyntaxError: Unexpected number

// Explanation: Function parameters must be identifiers such as num, not literal
// values such as 3. The body also refers to num, which was never declared.

// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
}

console.log(square(3));


