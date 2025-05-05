const prompt = require('prompt-sync')();
function linearSearch(arr,target){
    let start = 0, end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid]<target){
            start = mid+1;
        }
        else{
            end = mid-1;
        }
    }
    return -1;
}
let input = prompt("Enter the elements seperated by spaces : ");
let arr = input.split(" ").map(Number);
let target = prompt("Enter the target Element you want to search from Array : ");
let res = linearSearch(arr,target);
if(res == -1) console.log("Element is not found in Array");
else console.log(`Element is found at posistion ${res+1}`);



