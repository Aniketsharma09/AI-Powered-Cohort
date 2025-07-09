// FizzBuzz
var userNo = prompt("Enter a No");
var num = parseInt(userNo);
if(num%3 == 0){
    if(num%5 == 0){
        console.log("FizzBuzz");
    }
    else{
        console.log("Fizz");
    }
}
else if(num%5 == 0){
    console.log("Buzz");
}
else{
    console.log("Entered No is not multiple of 3 and nor 5");
}