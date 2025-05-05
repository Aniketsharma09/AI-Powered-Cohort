// ----------------------------->  Euclidean Algorithm <-----------------------------
function EuclideanAlgo(a, b) {
    while (b !== 0) {  // Run loop until b becomes 0
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    console.log("GCD is " + a); // a contains the GCD after loop ends
}
let firstNum = Number(prompt("Enter First Number"));
let secondNum = Number(prompt("Enter Second Number"));

EuclideanAlgo(firstNum, secondNum);
