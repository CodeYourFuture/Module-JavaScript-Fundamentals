// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// The error is SyntaxError: Identifier 'str' has already been declared
//in line 9 and 10 str is declared as a parameter of capitalise and again when let is used to initalise it
//syntax error means something in the code violate javascript rules
//in this case str has been declared twice
//I had to search solutions for this case which I encountered several times.
//it looks like a common error

//function capitalise(str) {
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//return str;
//}

// =============> write your explanation here
// =============> write your new code here
//the solution would be one of these:
//the easiest solution would be to remove let and not to declare it again, since it's already declared inside a function as a parameter
//other solutions I will list them later

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("hi"));

// Predict and explain first...
//  =============> write your prediction here
// A function capitalise is caolled, and a variable called str is initialised
//the variable str value is assigned using the string methods toUpperCase and slice

//than a return function is called to show the str value
//I predict that the input str characters get all capitalsed becuase toUpperCase method
//it starts applying this from index 0 or first character and the slice method is telling it to leave every character afrter the index 1 as it is

//so where does it end?
//another method str.slice is used to extract part of the string and returning it
//here it has a start  index only which is 1 and the end index omitted
//because the end index omitted it will start from index 1 to the end of the string

//I predict the value returned to be nothing because no value was assigned to str
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

