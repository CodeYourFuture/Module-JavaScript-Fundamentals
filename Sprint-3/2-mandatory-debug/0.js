// Predict and explain first...

// =============> write your prediction here
//inside the function console.log doesn't have the value of a and b parameters
//if I think like the computer than I will see a function declared with parameters a and b
//next line I will see a print function of the parameters a and b with operator  *
//I'm not a computer but I think if I was , I will print a * b
//than I will call the multiply function again to show the message
//The result of multiplying 10 and 32 is 320
//function multiply(a, b) {
//console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//ok, I was werong in my prediction about console.log not using the parameters value outside the function, which I correctr my understanduing Headers.apply
//what happens is the result is printed twice, the solution would be to remove the console.log from inside the function and use return instead while keeping console.log function call or in line 15

// Finally, correct the code to fix the problem
//  ===========> write your new code here
function multiply(a, b) {
  return (a, b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
