function lovefunc(flower1, flower2) {
    // Check if one flower has an even number of petals and the other has an odd number of petals
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}

// Example usage:
console.log(lovefunc(2, 3)); // Output: true (2 is even, 3 is odd)
console.log(lovefunc(4, 6)); // Output: false (both are even)
console.log(lovefunc(7, 8)); // Output: true (7 is odd, 8 is even)


// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.  Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.