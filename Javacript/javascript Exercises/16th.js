// sum of user input digits
var userInput = prompt("Enter a No");
var sum = 0;
for(var i=0; i<userInput.length; i++){
    sum += parseInt(userInput[i]);
}
console.log(sum);
