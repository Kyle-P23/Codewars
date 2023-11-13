// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
    // Convert the string to an array of characters, map and replace each digit
    return x.split('').map(digit => (parseInt(digit) < 5 ? '0' : '1')).join('');
}

// Example usage:
console.log(fakeBin("345671")); // Output: 001110 (replace digits below 5 with '0' and digits 5 and above with '1')
console.log(fakeBin("987654")); // Output: 111111 (replace all digits with '1' as they are 5 and above)

// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
// this took FOREVER!