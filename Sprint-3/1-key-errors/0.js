// Predict and explain first...
//I think this code will show a SyntaxError. The function has two variables named str in the same scope.
// ACTUAL ERROR (running the original code with `node 0.js`):
// C:\Users\EarthHarvestAdmin\CYF2026 LAMLA KAMANA\Module-JavaScript-Fundamentals\Sprint-3\1-key-errors\0.js:8
    // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//SyntaxError: Identifier 'str' has already been declared

// WHY IT IS ILLEGAL (DEEPER EXPLANATION):
// 1. SCOPE COLLISION: The function parameter `str` and the variable `let str` 
//    exist in the exact same function scope. In JavaScript, `let` and `const` 
//    do NOT allow redeclaring an existing variable in the same scope.
//
// 2. TEMPORAL DEAD ZONE (TDZ): When the JavaScript engine parses this function, 
//    it hoists the `let str` declaration to the top of the function scope. 
//    However, unlike `var`, `let` variables remain in an uninitialized state 
//    (the TDZ) until the exact line of declaration is executed.
//
// 3. FATAL PARSING ERROR: Because this is a SyntaxError (not a runtime error), 
//    the JavaScript engine catches the illegal redeclaration during the 
//    compilation/parsing phase, BEFORE any code executes. This is why the 
//    `console.log` on line 12 never runs—the script never gets past the 
//    parsing stage.
//
// FIX: use a different name for the new variable, e.g. `result`.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  const result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}
console.log(capitalise("hello"));
// str is used both as the function parameter (function capitalise(str)) and again in let str = ...
