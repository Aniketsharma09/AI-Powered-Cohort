// Check for leap year
var userInput = prompt("Enter a year ");
var year = parseInt(userInput);
if(isNaN(userInput)){
    console.log("Plese enter a valid year");
}
else if((year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
    console.log("Enter year is a leap year");
}
else{
    console.log("Entered year is not a leap year");
}