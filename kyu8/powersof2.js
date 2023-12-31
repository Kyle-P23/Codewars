function powersOfTwo(n) {
    var result = [];
    
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    
    return result;
}

// Example usage:
console.log(powersOfTwo(3)); // Output: [1, 2, 4, 8]
console.log(powersOfTwo(5)); // Output: [1, 2, 4, 8, 16, 32]


// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript