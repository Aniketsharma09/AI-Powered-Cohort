// // --------------------> Automorphic Number <----------------------
function isAutomorphic(num){
    let sqr = num*num , count = 0,copy = num;
    while(num>0){
       num = Math.floor(num/10);
       count++;
    }
    let lastDigits = sqr%Math.pow(10,count);
    if(lastDigits == copy) return true;
    else return false;
}
let num = Number(prompt("Enter a Number"));
let res = isAutomorphic(num);
if(res){
    console.log("Automorphic Number");
}
else{
    console.log("Not a Automorphic Number");
}
