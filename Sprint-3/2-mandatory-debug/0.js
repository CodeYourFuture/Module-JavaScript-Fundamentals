// Predict and explain first...

// here we are declaring a function called multiply which takes in two arguments and multiplies them but because the function doesn't return the value when we call the function it hasnt been stored anywhere for it to be called upon so i think it will return undefined in the template literal. I also think because there are two console logs one will print the value 320 and the other will print the template literal but as multiply hasn't been stored anywhere it will print undefined ?

//function multiply(a, b) {
// console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//320
//The result of multiplying 10 and 32 is undefined
// the function as it is only storing the result of a and b in two console logs one asking for the total which is 320 so it prints it and the other is template literal so it prints the template literal but multiply is undefined.

// Finally, correct the code to fix the problem
function multiply(a, b) {
  let multiplyResult = a * b;
  return multiplyResult;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
