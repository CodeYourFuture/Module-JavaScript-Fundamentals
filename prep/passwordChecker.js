const password = "secretword123";
const userInput = "thisiswrong";
const adminPassword = "override";
let response = "";

if (userInput === password){ 
  response = "Correct password entered";
} else if (userInput === adminPassword){
  response = "Admin access granted";
} else {
  response = "Incorrect password!";
}

console.log(response);
