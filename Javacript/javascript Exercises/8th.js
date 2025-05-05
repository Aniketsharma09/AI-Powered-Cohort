// User Greeting
var userName = prompt("Enter your name");
var currentTime = prompt("Enter the current time in 24 hour formate");
var time = parseInt(currentTime);
if(time>=5 && time<=12){
    console.log("Good morning "+userName);   
}
else if(time>0  && time<5){
    console.log("Good night");  
}
else if(time>12 && time<=17){
    console.log("Good afternoon "+userName);
}
else if(time>17 && time<21){
    console.log("Good evening "+userName);
}
else if(time>=21 && time<=24){
    console.log("Good night "+userName);
}
else{
    console.log("enter valid time "+userName);
    
}