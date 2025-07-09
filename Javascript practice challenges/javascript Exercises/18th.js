// Reverse without using split(), reverse() and join()
var userInput = prompt("Enter a three digit No.");
var reverseNum = '';
for(var i = userInput.length-1; i>=0; i--){
    reverseNum += userInput[i];
}
console.log(reverseNum);