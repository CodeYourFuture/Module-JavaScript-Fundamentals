// Predict and explain first...
  // Prediction: I think the code will have a SyntaxError because 'str' is declared twice.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
return `${str[0].toUpperCase()}${str.slice(1)}`;
}

  // Explanation:  The function already has something called str. You can't make a second thing with the same name inside the same function
  // New code: removed the 'let str =' line and returned the expression directly.
