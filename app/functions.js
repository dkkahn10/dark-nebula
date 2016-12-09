exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    var numbersArr = [2, 3, 4, 5, 6, 7, 8, 9];
    for(var i = 0; i < numbersArr.length; i++) {
      if (num % numbersArr[i] != 0) {
        return true;
      } else {
        return false;
      }
    }
  },

  arraySum : function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
  },

  fizzBuzz : function(num) {
    if ((num % 3 == 0) && (num % 5 == 0)) {
      return "fizzbuzz";
    } else if (num % 3 == 0) {
      return "fizz";
    } else if (num % 5 == 0) {
      return "buzz";
    } else if (typeof(num) === 'string'){
      return false;
    } else {
      return num;
    }
  }
};
