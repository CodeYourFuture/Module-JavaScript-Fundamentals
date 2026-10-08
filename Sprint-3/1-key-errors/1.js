// Predict and explain first...

// Why will an error occur when this program runs?
// I predict this will cause a SyntaxError first (at parse time) because 
// decimalNumber is declared twice in the same scope.

// Once the SyntaxError is fixed, a ReferenceError will appear at runtime.
// This is because we would need to rename one of the variables so the 
// function can actually use it.

function convertToPercentage(decimalNumber) {
 const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

// decimalNumber is declared twice in the same scope, once as the function's parameter, and again with const inside the function body. JavaScript doesn't allow redeclaring the same name in the same scope. Even after fixing that, console.log(decimalNumber) would fail too, because decimalNumber only exists inside the function.
//ACTUAL ERROR (SyntaxError):.
// C:\Users\EarthHarvestAdmin\CYF2026 LAMLA KAMANA\Module-JavaScript-Fundamentals\Sprint-3\1-key-errors\1.js:12
// const decimalNumber = `$ {decimalNumber * 100}%`;
//  ^

// SyntaxError: Identifier 'decimalNumber' has already been declared