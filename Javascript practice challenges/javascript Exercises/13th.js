// Swap two no without third variable
var num1 = prompt("Enter first No");
var num2 = prompt("Enter second No");
var a = parseInt(num1);
var b = parseInt(num2);
console.log("frist  No.: "+a);
console.log("second  No.: "+b);
a =  a + b;
b = a - b;
a = a - b;
console.log("frist  No.: "+a);
console.log("second  No.: "+b);