//Simple calculator
var num1 = prompt("Enter the first No.");
var num2 = prompt("Enter the second No.");
var operator = prompt("Enter the operation you wnat to perfrom");
var firstNo = parseInt(num1);
var secondNo = parseInt(num2);
switch(operator){
    case '+':
        console.log(firstNo + secondNo);
        break;
    case '-':
        console.log(firstNo-secondNo);
        break;
    case '/':
        console.log(firstNo/secondNo);
        break;
    case '%':
        console.log(firstNo%secondNo);
        break;
    case '*':
        console.log(firstNo*secondNo);
        break;
    default:
        console.log("plese enter the valid operator");
}
