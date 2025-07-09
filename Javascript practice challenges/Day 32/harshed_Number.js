// -------------------> Harshed Number <-------------------
function isHarshed(num){
    let sum = 0, copy = num;
    while(num !== 0){
        let last = num%10;
        sum += last;
        num = Math.floor(num/10);
    };
    if(copy%sum === 0){
        console.log("Harshed Number");
    }
    else{
        console.log("Not a Harshed Number");
    };
};
let num = Number(prompt("Enter a Number"));
isHarshed(num);