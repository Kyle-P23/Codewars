function findAverage(array) {
    if (array.length !== 0 ) {
      var result = array.reduce(function add(sum, currValue) {
        return sum + currValue;
      }, 0);
      var average = result / array.length;
      return average
    } else {
      return 0;
    }
  }
//   https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript