function countSheeps(sheep) {
    // Using filter to get an array of true values and then find its length
    return sheep.filter(s => s === true).length;
}

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript