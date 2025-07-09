// Largest of three no.
var num1 = prompt("Enter the first No.:");
var num2 = prompt("Enter the second No.:");
var num3 = prompt("Enter the third No.:");
if(num1 > num2){
    if(num1 > num3){
        console.log(num1+" is largest No.")
    }
    else{
        console.log(num3 + " is largest No.");
    }
}
else if(num2 > num3){
    console.log(num2 + " is largest No.");
}
else{
    console.log(num3 + " is largest No.");   
}