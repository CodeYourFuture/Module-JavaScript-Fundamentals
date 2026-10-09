// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

function capitalise_all_letters(str) {
  //I used toUpperCase string method to capitalise all the string
  //I used replace to replace first space " " in the string and replace it with "_"
  return str.toUpperCase().replaceAll(" ", "_");
}

console.log(
  `The result is ${capitalise_all_letters("hello world we are here")}`,
);

// so far its easy -_-
//I used replaceAll to replace every space with _
//I used Copilot like a teacher to help me when I'm stuck
//one day I will create AI models -_-1
