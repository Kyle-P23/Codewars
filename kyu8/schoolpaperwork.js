function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }

    return n * m;
}

// Example usage:
console.log(paperwork(5, 10));  // Output: 50
console.log(paperwork(-2, 5));  // Output: 0
console.log(paperwork(3, -8));  // Output: 0


// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript