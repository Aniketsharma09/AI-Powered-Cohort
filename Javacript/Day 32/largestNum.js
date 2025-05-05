let arr = [20,12,23,4,35,3563,35,356];
let maxElement = arr[0], maxElementIndex = 0;
for(let i=0; i<arr.length-1; i++){
    if(arr[i]>maxElement){
        maxElement = arr[i];
        maxElementIndex = i;
    }
}
console.log(maxElement, maxElementIndex);
