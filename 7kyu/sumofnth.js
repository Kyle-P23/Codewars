function SeriesSum(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + i * 3);
    }

    // Round the answer to 2 decimal places and return it as a string
    return sum.toFixed(2);
}

// Example usage:
console.log(SeriesSum(3)); // Output: "1.39" (1 + 1/4 + 1/7)
console.log(SeriesSum(0)); // Output: "0.00" (given value is 0)

// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript