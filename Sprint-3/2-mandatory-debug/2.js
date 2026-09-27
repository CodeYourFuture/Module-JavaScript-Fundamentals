// Predict and explain first...

// Predict the output of the following code:
// =============> I think the num variable can be accesed by the funtion getLastDigit()
// so it means it is not using the argument that is passed by the function.
// the output for the three of function calls will be  3.

//const num = 103;

//function getLastDigit() {
  //return num.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
  // The output is 
      //  * The last digit of 42 is 3
      // * The last digit of 105 is 3
      //* The last digit of 806 is 3
// Explain why the output is the way it is
// * the output is the way it is because it was taking the num value
//   from the variable num that has been declared and initialized outside the function.
//   and const num has a global scope.if the function hasn't declared a variable num 
//     inisde the function it will use the gobaly declared and insialized variable num 
// Finally, correct the code to fix the problem
// =============>function getLastDigit() {
 const num = 103;

function getLastDigit(num) {

return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
 // yes it does tell the last digit of each number 
 // The last digit of 42 is 2
//  The last digit of 105 is 5
//  The last digit of 806 is 6
// Explain why getLastDigit is not working properly - correct the problem
