// Predict and explain first...
//  =============> write your prediction here:this will throw an error, because the function has a parameter called str and then tries to declare another variable also called str inside the function body using let.

// call the function capitalise with a string input: SyntaxError: Identifier 'str' has already been declared
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here 
:in JavaScript, a function's parameters are treated like variables that already exist within that function's scope the moment the function starts. So writing function capitalise(str) { ... }, str is already declared as soon as you're inside the function. Trying to declare another variable with the same name using let str = ... inside that same scope is not allowed — JavaScript won't let you redeclare an existing let/const/parameter name in the same scope, since it would be ambiguous which "str" you mean.

// =============> write your new code here
:function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}

console.log(capitalise("hello")); // "Hello"
