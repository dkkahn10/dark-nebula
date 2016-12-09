exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor.greeting;
  },

  iterate : function(obj) {
    var propertyArray = [];
    for(var propt in obj) {
      if (obj.hasOwnProperty(propt)) {
        propertyArray.push(propt + ": " + obj[propt]);
      }
    }
    return propertyArray;
  }
};
