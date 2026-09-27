
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here 
: This should fail before it even runs, because 3 is being used as a parameter name in the function definition — function square(3) { ... }. Parameter names have to follow the same rules as variable names, and just like a variable, they can't just be a plain number. A parameter name is meant to be a placeholder/label for whatever value gets passed in later, not a literal value itself.

function square(3) {
    return num * num;
}

// =============> write the error message here 
:SyntaxError: Unexpected number

// =============> explain this error message here
:hen you write a function like function square(num) { ... }, num is a name that acts as a stand-in for whatever value someone passes in when they call square(5) or square(10).Writing 3 there doesn't make sense to the parser; it's like trying to say "let 3 be the placeholder," which conflicts with how the language works. the function body refers to num, but num was never actually defined as the parameter name, so even fixing the syntax error alone wouldn't be enough.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3)); // 9


