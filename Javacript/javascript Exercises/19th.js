// second largest element 
var a = parseInt(prompt("Enter the first Number "));
var b = parseInt(prompt("Enter the second Number "));
var c = parseInt(prompt("Enter the third Number "));

if((a>b && a<c) || (a>c && a<b)){
    console.log("second largest No is "+a); 
}
else if((b>a && b<c) || (b>c && b<a)){
    console.log("second largest No is "+b); 
}
else{
    console.log("second largest No is "+c); 
}