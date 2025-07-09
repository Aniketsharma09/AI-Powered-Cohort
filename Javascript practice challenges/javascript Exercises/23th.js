// Toggle case of each character
function toggleCase(word){
    var str = '';
    for(let char of word){
        if(char === char.toUpperCase()){
            str += char.toLowerCase();
        }
        else{
            str += char.toUpperCase();
        }
    }
    return str;
}
var userInput = prompt("Enter a word");
var result = toggleCase(userInput);
console.log(result);
