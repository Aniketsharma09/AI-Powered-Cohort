//  Simple  login system
var userInput = prompt("Enter user Name");
var password = prompt("Enter your password");
var validName = "Aniket";
var validPassword = "123";
if(userInput == validName && password == validPassword ){
    console.log("Login Successful");
    console.log("Welcome Aniket");
}
else{
    console.log("Wrong user name or password");
}