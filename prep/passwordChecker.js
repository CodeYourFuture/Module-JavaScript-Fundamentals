const password = "secretword123";
const userInput = "secretword123";
const adminPassword = "override";

if (userInput === password){
  console.log("Correct password entered");
} else if (userInput === adminPassword){
    console.log("Admin access granted")
} else{
    console.log("Incorrect password!");
}