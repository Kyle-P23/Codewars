function removeExclamationMarks(s) {
    return s.replace(/!/g, ''); // Use regular expression /!/g to match all exclamation marks globally
}

// console log to see if this works
console.log(removeExclamationMarks("Hello!"))// Output: "Hello"

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript