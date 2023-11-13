// Sum Numbers
function sum(numbers) {
    "use strict";
    
    // Check if the array is empty
    if (numbers.length === 0) {
        return 0;
    }

    // Use the reduce method to sum up the numbers
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Example usage:
console.log(sum([1, 5.2, 4, 0, -1]));   // Output: 9.2
console.log(sum([]));                     // Output: 0
console.log(sum([-2.398]));               // Output: -2.398

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript