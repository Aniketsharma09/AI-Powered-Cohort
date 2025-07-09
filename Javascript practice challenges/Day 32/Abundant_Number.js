//------------------>  Abundant Number <-----------------------------
function isAbundantNum(num) {
    let sum = 1; // 1 is always a divisor (except for num = 1)
    let sqrtNum = Math.sqrt(num); // Compute the square root once

    for (let i = 2; i <= sqrtNum; i++) { // Loop from 2 to sqrt(num)
        if (num % i === 0) { // If 'i' is a divisor
            sum += i; // Add the divisor
            if (i !== num / i) sum += num / i; // Add its pair (num / i)
        }
    }
    console.log(`${num} is ${sum > num ? "an abundant" : "not an abundant"} Number`);
}
let num = Number(prompt("Enter a number"));
isAbundantNum(num);
