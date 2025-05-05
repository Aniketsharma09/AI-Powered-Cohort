let mat = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
let minC = 0, maxC = mat[0].length-1, minR = 0, maxR = mat.length-1 , matLength = mat[0].length * mat.length;
let ansArr = [];
while(ansArr.length <matLength){
    for(let i=minC; i<=maxC; i++){
        ansArr.push(mat[minR][i]);
    }
    minR++;
    for(let i=minR; i<=maxR; i++){
        ansArr.push(mat[i][maxC]);
    }
    maxC--;
    for(let i=maxC; i>=minC; i--){
        ansArr.push(mat[maxR][i]);
    }
    maxR--;
    for(let i=maxR; i>=minR; i--){
        ansArr.push(mat[i][minC]);
    }
    minC++;
}
console.log(ansArr);

