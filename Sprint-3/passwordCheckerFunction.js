// Already have the password stored in a variable;
// Exercise one: Using console.log and calling function
// const password = "Mattcarolus10";

// // Receive the value which the user entered;
// function checkPassword(userInput) {

// // Compare the two values;
// if (userInput===password) {

// // If they match print "Correct password entered";
//     console.log("Correct password entered ")
// }

// else {
// // If they don't match print "Incorrect password, please try again";
//     console.log("Incorrect password, please try again")
// };

// };
// checkPassword("Mattcarolus10");



// // Exercise 2: Using the variable scope "response"
// const password2 = "Mattcarolus10";

// // Receive the value which the user entered;
// function checkPassword(userInput) {

// // Compare the two values;
// if (userInput===password2) {

// // If they match print "Correct password entered";
//     response = "Correct password entered "
// }

// else {
// // If they don't match print "Incorrect password, please try again";
//     response = "Incorrect password, please try again"
// };

// };
// checkPassword("Mattcarolus");
// console.log(response)



const password3 = "Mattcarolus10";
const output = checkPassword("Mattcarolus10");

// Receive the value which the user entered;
function checkPassword(userInput) {
    let response;

// Compare the two values;
if (userInput===password3) {

// If they match print "Correct password entered";
    response = "Correct password entered ";
}

else {
// If they don't match print "Incorrect password, please try again";
    response = "Incorrect password, please try again";
}
return response;
}
console.log(output);
 

