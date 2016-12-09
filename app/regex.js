exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var numberCheck = /\d+/;
    return numberCheck.test(str);
  },

  containsRepeatingLetter : function(str) {
    var repeatLetter = /([a-zA-Z])\1/;
    return repeatLetter.test(str);
  },

  endsWithVowel : function(str) {
    var endVowel = /([aeiouAEIOU])$/;
    return endVowel.test(str);
  },

  captureThreeNumbers : function(str) {
    var number3Check = /\d{3}/;
    if (number3Check.test(str)) {
      return number3Check.exec(str)[0];
    } else {
      return false;
    }
  },

  matchesPattern : function(str) {
    var numberPattern = /^\d{3}-\d{3}-\d{4}$/;
    return numberPattern.test(str);
  },

  isUSD : function(str) {
    var dollaDolla = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
    return dollaDolla.test(str);
  }
};
