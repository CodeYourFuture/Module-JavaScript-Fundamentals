// Predict and explain first...

// =============> write your prediction here
// This function would multiply the two arguments a and b 
// when we log the output we will get the string and the output of the function but because we are not returning an output we might run into an error 

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//The console.log() inside the function will print a*b but when we call the function will return the out put and undefined 
// but after the fix of returning instead it will be working giving the result in that instance will get 320

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

console.log(multiply(10,32))