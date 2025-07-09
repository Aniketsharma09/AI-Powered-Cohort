// ---------------> Reverse a number <-------------
function revNum(num) {
  let revNo = 0;
  while (num > 0) {
    let rem = num % 10;
    revNo = revNo * 10 + rem;
    num = Math.floor(num / 10);
  }
  return revNo;
}
let num = Number(prompt("Enter a Number"));
let reverseNum = revNum(num);
console.log(reverseNum);
