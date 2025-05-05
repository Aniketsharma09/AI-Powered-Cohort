// Palindrome Checker
var userInput = prompt("Enter word");
var n = userInput.length;
var palindrome = false;
for(var i=0; i<n; i++){
    if(userInput[i] != userInput[n-i-1]){
        console.log("Not a palindrome");
        break;
    }
    else{
        palindrome = true;
    }
}
if(palindrome){
    console.log("Entered word is Palindrome");
}
