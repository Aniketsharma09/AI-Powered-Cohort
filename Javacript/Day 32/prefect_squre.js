// ---------------------> Perfect Squre <-----------------
function isPerfectSqure(num){
    let sqrt = 0;
    sqrt = Math.sqrt(num);
    if(Number.isInteger(sqrt)){
        console.log("This is perfect squre number");
    }
    else{
        console.log("This is not a perfect squre Number");
    }
}
let num = Number(prompt("Enter a Number"));
isPerfectSqure(num);