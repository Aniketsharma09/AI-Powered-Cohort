// Check the user age
var userAge = prompt("Enter you age");
if(userAge < 18){
    console.log("you are minor");
}
else if(userAge>=18 && userAge<=60){
    console.log("you are adult");
}
else if(userAge>60 && userAge<100){
    console.log("you are a senior citizen");
}
else{
    console.log("you are a ghost"); 
}