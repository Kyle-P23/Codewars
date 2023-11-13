function filter_list(l) {
    // Use the filter method to keep only non-negative integers
    return l.filter(item => typeof item === 'number' && item >= 0);
}

// Example usage:
const result = filter_list([1, "leon", 3, "noel", 5, "baller"]);
console.log(result);  // Output: [1, 3, 5]



// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript