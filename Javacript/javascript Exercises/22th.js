// Nested conditions challenge
function checkSalary(age,salary){
    if(age<18){
        console.log("your are no eligible for a job");
    }
    else{
        if(salary<20000){
            console.log("low salary");
        }
        else if(salary>50000){
            console.log("high salary");
        }
        else{
            console.log("medium salary");
        }
    }
}
var age = prompt("Enter you age");
var salary = prompt("Enter your salary");
var a = parseInt(age);
var s = parseInt(salary);
checkSalary(a,s);