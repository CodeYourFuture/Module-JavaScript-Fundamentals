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
//

function toUpperSnakeCase(text) {
  // return text.trim().replace(/\s+/g, "_").toUpperCase(); - first attempt that inserted underscore
  return text.toUpperCase().replaceAll(" ", "_");
}

const text = toUpperSnakeCase("Hello there");
console.log(text);

// Trim and regex pattern was the only saving grace I came across to resolve the underscore issue I had spent hours researching.
// I have however now modified and replaced the pattern for easy understanding with AI's help
// CodeYourFuture AI Usage Guide reviewed again
