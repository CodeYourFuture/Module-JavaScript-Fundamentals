const password="secretword123";
const userInput="thisiswrong";
const adminPassword="override";
const response="";

if(userInput === password){
    console.log("Correct password entered");
}
else if(userInput === adminPassword){
    console.log("Admin access granted");
} 
else{
    response="Incorrect password!";
}
