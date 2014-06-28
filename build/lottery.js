(function() {
  var blue, getRed, randomNum, red, redResult, tmp,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  require('coffee-script/register');

  red = [];

  randomNum = function(base, min) {
    return parseInt(Math.random() * 15) + min;
  };

  blue = randomNum(15, 1);

  getRed = function() {
    return randomNum(33, 1);
  };

  while (red.length !== 6) {
    tmp = getRed();
    while (__indexOf.call(red, tmp) >= 0) {
      tmp = getRed();
    }
    red.push(tmp);
  }

  redResult = red.sort(function(a, b) {
    return a > b;
  });

  console.log("" + redResult + ":" + blue);

}).call(this);
