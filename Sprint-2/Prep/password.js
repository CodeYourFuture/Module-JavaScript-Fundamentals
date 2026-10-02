const password = "Matt123";
const userInput = "Anything";
const administrator = "Anything";
let response = " ";

if (password === userInput) {
    response = "Login successful";
} else if (userInput === administrator) {
    response = "Welcome to the site";
}
else {
    response = "Please try again";
}
console.log(response);


