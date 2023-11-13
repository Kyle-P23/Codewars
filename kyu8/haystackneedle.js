function findNeedle(haystack) {
    // Find the index of the string "needle" in the array
    const index = haystack.indexOf("needle");

    // Check if "needle" was found
    if (index !== -1) {
        return "found the needle at position " + index;
    } else {
        return "needle not found";
    }
}

// Example usage:
const haystack1 = ["hay", "needle", "hay", "hay"];
console.log(findNeedle(haystack1)); // Output: found the needle at position 1

const haystack2 = ["hay", "hay", "hay"];
console.log(findNeedle(haystack2));

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

