function sumMix(x) {
    // Use reduce to sum up all values in the array
    return x.reduce((sum, value) => sum + Number(value), 0);
}

// Example usage:
console.log(sumMix([1, 2, 3, "4", 5]));  

// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
