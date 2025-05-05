// Number to word
function numberToWord(num){
    const numWord = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    if(num>=0 && num<=9){
        console.log(numWord[num]);
    }
}
var userInput = prompt("Enter a single digit number");
var num = parseInt(userInput);
numberToWord(num);