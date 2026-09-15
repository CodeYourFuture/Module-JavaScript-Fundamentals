// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

// this gives a TypeError
// age is already a const at the start and calling it again just as age wont work, naming it like "older" would work better:

// const age = 33;
// let older = (age + 1);
// console.log(older)

