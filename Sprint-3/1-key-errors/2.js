// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// I think this code will throw an error because we are passing an actual number into the parameters but javascript only allows a variable to be passed into the parameters that can be used to store information so i would need to change the number 3 into num ( and num here would act as the placeholder for any number passed in when the function gets called later) for this code to work because as it is i believe num would be undefined as it hasn't been defined anywhere.

//function square(3) {
//    return num * num;
//}

// error message: SyntaxError: Unexpected number

// This error means javascript couldn't run the code because it doesn't accept numbers as a parameter.

// Finally, correct the code to fix the problem

function square(num) {
  let numResult = num * num;

  return numResult;
}

console.log(square(3));
