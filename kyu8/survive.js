function hero(bullets, dragons) {
    // Each dragon takes 2 bullets to be defeated
    return bullets >= dragons * 2;
}

// Example usage:
console.log(hero(10, 5));  // Output: true (10 bullets can defeat 5 dragons)
console.log(hero(7, 4));   // Output: false (7 bullets are not enough for 4 dragons)


// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript