// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Answer: I predict that we will get a Reference Error: num is not defined. Or perhaps an error about the 3, as
// it is a number and therefore not a valid parameter name. I believe perhaps parameter names are like variable
// names and can't start with a number.

/*
function square(3) {
    return num * num;
}
*/

// =============> write the error message here
// Answer: SyntaxError: Unexpected number

// =============> explain this error message here
// Answer: Yes we got an error message about the number 3. We wouldn't get a message about num not being defined
// since the function isn't called in the code, so the inside of the function can't produce an error.
// I will first try to update the 3 to n3, to see if it is a valid parameter name and see if the error goes away,
// just as an experiment.

// Answer: The error did go away. However it didn't solve our problem as we still want to receive 3 squared when
// calling the function. I will change n3 to the proper parameter name, num. So it can be referenced inside the
// function body. Then I will make a function call and pass in 3 there, as an argument to the parameter num.
// Then I will log the result to see if it worked.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(3));
