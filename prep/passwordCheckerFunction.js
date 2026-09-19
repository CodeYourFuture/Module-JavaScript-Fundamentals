const password = "secretword123";

function checkPassword(userInput){
    
    return userInput === password;
}

const toPrint = "The result was: " + checkPassword("secretword123");
checkPassword("wrongngndn");
console.log(toPrint);