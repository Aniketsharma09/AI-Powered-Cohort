// check that if a entered character is uppercase or not
var char = prompt("Enter a character");
if (char.length !== 1) {
    console.log("Please enter only one character.");
} else if (char >= "A" && char <= "Z") {
    console.log("The character is uppercase.");
} else if (char >= "a" && char <= "z") {
    console.log("The character is lowercase.");
} else {
    console.log("The character is neither uppercase nor lowercase.");
}
