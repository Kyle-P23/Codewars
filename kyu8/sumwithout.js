function sumArray(array) {
    if (!array || array.length <= 2) {
        return 0; // return 0 if empty array
    }

    // Find the highest and lowest 
    const maxNum = Math.max(...array);
    const minNum = Math.min(...array);

    // Sum all the numbers except the highest and lowest elements
    return array.reduce((sum, num) => sum + num, 0) - maxNum - minNum;
}

// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript