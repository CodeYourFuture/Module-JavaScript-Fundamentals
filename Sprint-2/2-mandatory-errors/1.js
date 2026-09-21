// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

/*
Answer : The Error is  : TypeError: Assignment to constant variable.
Constants in JavaScript can't be reassigned to correct this we have to change the varible type from const => let.

*/
console.log(age);
