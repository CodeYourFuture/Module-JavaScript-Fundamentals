// trying to create an age variable and then reassign the value by 1

// const age = 33;
// age = age + 1;

// the error is in line 4. It's a "TypeError: Assignment to constant variable", which was thrown because the value to
// a specific constant can only be assigned once (which is done in line 3 already).
// This wouldn't throw an error if instead of const, the let was used

let age = 33;
age = age + 1;
console.log(age);
