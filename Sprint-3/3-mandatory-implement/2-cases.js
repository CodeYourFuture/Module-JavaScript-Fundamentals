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
function toUpperSnakeCase(words) {
  return words.toUpperCase().trim().split(/\s+/).join("_");
}

console.log(toUpperSnakeCase("hello there"));

console.assert(
  toUpperSnakeCase("hello") === "HELLO",
  'Expected "hello" to become "HELLO"',
);
console.assert(
  toUpperSnakeCase("  hello   there  ") === "HELLO_THERE",
  "Expected extra spaces to be trimmed and collapsed to one underscore",
);
