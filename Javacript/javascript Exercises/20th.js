// first non-repeating character
function firstNonRepeatingCharacter(word) {
    // Create a frequency map
    const charCount = {};

    // Count occurrences of each character
    for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first character with a count of 1
    for (let char of word) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no unique character is found
}

// Get user input
const word = prompt("Enter a word:").toLowerCase(); // Convert to lowercase for case insensitivity
const result = firstNonRepeatingCharacter(word);

if (result) {
    console.log(`First non-repeating character: ${result}`);
} else {
    console.log("No non-repeating character found.");
}
