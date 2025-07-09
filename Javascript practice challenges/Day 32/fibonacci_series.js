// -----------------> Fibonacci series <------------------
function printFibonacciSeries(num){
    if(num<=0) console.log(0);
    let a=0, b=1;
    console.log(a);
    if(num>0) console.log(b);
    for(let i=2; i<num; i++){
        let next = a+b;
        console.log(next);
        a = b;
        b = next;
    }
}
let num = Number(prompt("Enter a number"));
printFibonacciSeries(num);