// Even digit counter
function evenDigitCounter(number){
    var count = 0;
    for(let digit of number){
        if(parseInt(digit)%2 != 0){
            count++;
            console.log(`Even digit ${digit}`);
            
        }
    }
    return count;
}
var userInput = prompt("Enter a no");
var result = evenDigitCounter(userInput);
if(result){
    console.log(`Entered Number has ${result} even digits`);
}
else{
    console.log(`Entered Number does't hase even digits`);
}