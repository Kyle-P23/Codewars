function setAlarm(employed, vacation) {
    // Return true if employed and not on vacation, otherwise return false
    return employed && !vacation;
}

// seeing if it works:
console.log(setAlarm(true, false)); // Output: true (employed and not on vacation)
console.log(setAlarm(true, true));  // Output: false (employed but on vacation)


// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript