exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    };
    return arr;
  },


  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        count ++;
      }
    };
    return count;
  },

  duplicates : function(arr) {
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i], i + 1) > -1) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    };
    return duplicates;
  },

  square : function(arr) {
    var square = [];
    for (var i = 0; i < arr.length; i++){
      square.push(arr[i] * arr[i]);
    }
    return square;

  },

  findAllOccurrences : function(arr, target) {
    var occurances = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        occurances.push(i);
      }
    };
    return occurances;
  },
};
