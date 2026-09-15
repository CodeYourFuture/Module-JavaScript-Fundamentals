// Predict and explain first...

// =============> write your prediction here
// as we are not returning anything from the function, it is not possible to retrieve the returned value from this function, so it will throw undefined.
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// however when the function is run, it displays 320 and undefined next to the The result of multiplying 10 and 32. So obviusly the 320 is displayed on the console, because that's the output of the function, but it is undefined when we try to retrieve it for use in the template literals. so we need to return the value inside a function in order to use it outside.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
