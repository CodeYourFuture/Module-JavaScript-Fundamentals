// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

// The original code used const to declare age.
// A const variable cannot be reassigned after declaration.
// Attempting to reassign age caused a TypeError.
// Changing const to let fixes the problem because let allows reassignment.
