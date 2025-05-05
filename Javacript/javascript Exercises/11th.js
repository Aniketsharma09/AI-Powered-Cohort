// Grade  Calculator
var marks = prompt("Enter your markes");
var mark = parseInt(marks);
if(mark>=90 && mark<=100){
    console.log("you got A grade");
}
else if(mark>=80 && mark<90){
    console.log("you got B grade");
}
else if(mark>=70 && mark<80){
    console.log("you got C grade");
}
else if(mark>=60 && mark<70){
    console.log("you got D grade");
}
else if(mark<60 && mark>0){
    console.log("you got F grade");
}
else{
    console.log("enter the valid marks");
    
}
