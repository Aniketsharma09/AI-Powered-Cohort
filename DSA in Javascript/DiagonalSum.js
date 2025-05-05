let arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
let disSum = 0;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(i === j || (i+j) == arr.length-1){
           disSum += arr[i][j];
        }
    }
}
console.log(disSum);

