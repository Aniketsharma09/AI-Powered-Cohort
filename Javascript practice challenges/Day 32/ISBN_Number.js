// ----------------------> ISBN Number <--------------------------
function checkISBN(num){
    if(num.length == 10){
        if(isNaN(Number(num))){
            console.log("Please enter a number?");
        }
        else{
            let position = 1;
            let sum = 0;
            for(let el of num){
                sum += Number(el)*position;
                position++;
            }
            if(sum%11 == 0){
                console.log("ISBN Number");
            }
            else{
                console.log("Not a ISBN Number");
            }
        }
    }
    else{
        console.log("Please enter a correct number");
    }
}
let num = prompt("Enter a number");
checkISBN(num);