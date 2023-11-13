function abbrevName(name) {
    // Split the name into two words
    const words = name.split(" ");

    // Extract the first letter of each word, convert to uppercase, and join with a dot
    return words[0][0].toUpperCase() + '.' + words[1][0].toUpperCase();
}

// Example usage:
console.log(abbrevName("Sam Harris"));       // Output: "S.H"
console.log(abbrevName("patrick feeney"));   // Output: "P.F"



// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript