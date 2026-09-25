// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

const means "this value is locked in, you can't change it later." So when line 2 tries to reassign age, JavaScript throws:

TypeError: Assignment to constant variable.
//instead use 'let' i.e let age = 33;
age = age + 1;

console.log(age); // 34
const for stuff that stays the same, let for stuff that's meant to change such as age.