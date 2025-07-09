// find missing number 
function findMissingNo(num){
    let n = num.length+1;
    let actalSum = num.reduce((sum, num) => sum+num,0);
    let expectedSum = (n*(n+1)/2);
    let missingNum = expectedSum - actalSum;
    console.log(missingNum);
}
var numbers = [1,2,3,5,6];
findMissingNo(numbers);