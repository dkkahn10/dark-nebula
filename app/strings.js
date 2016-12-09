exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
    var newString = str.split('');
    for (var i = 0; i < newString.length; i++) {
      if (newString[i] == newString[i + amount]) {
        newString.splice(i, 1);
        i--;
      }
    }
    return newString.join('');
  },

  // reduceString: function(str, amount) {
  //   var strArray = str.split('');
  //   var dupArray = [];
  //   var newArray = [];
  //   for (var i = 0; i < strArray.length; i++) {
  //     if (strArray[i] === strArray[i + 1]) {
  //       dupArray.push(strArray[i]);
  //     }else {
  //       dupArray.push(strArray[i]);
  //       dupArray = dupArray.slice(0, amount);
  //       newArray = newArray.concat(dupArray);
  //       dupArray = [];
  //     }
  //   }
  //   return newArray.join('');
  // },

  wordWrap: function(str, cols) {
    var formattedStr = str.split("");
    var counter = 0;
    for(var i = 0; i < formattedStr.length; i++) {
      if (formattedStr[i] != " ") {
        counter++;
      }
      if ((counter >= 3) && (formattedStr[i] == " ")) {
        formattedStr[i] = "\n";
        counter = 0;
      }
    }
    return formattedStr.join("");
  },

  reverseString: function(str) {
    var string = '';
    for (var i = str.length - 1; i >= 0; i--) {
      string += str[i];
    };
    return string;
  },
};
