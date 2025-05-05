// sum of digits
function findDigitSum(num){
    let sum = 0;
    while(num>0){
        let rem = num%10;
        sum += rem;
        num = Math.floor(num/10);
    }
    return sum;
}
let num = Number(prompt("Enter a number"));
let sum = findDigitSum(num);
console.log(sum);
