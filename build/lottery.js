(function() {
  var Chance, Lottery,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Chance = require('chance');

  Lottery = (function() {
    function Lottery() {}

    Lottery.prototype.randomNum = function(start, end) {
      var chance;
      chance = new Chance();
      return chance.integer({
        min: start,
        max: end
      });
    };

    Lottery.prototype.blue = function() {
      return this.randomNum(1, 15);
    };

    Lottery.prototype.red = function() {
      return this.randomNum(1, 33);
    };

    Lottery.prototype.bang = function() {
      var red, redResult, tmp;
      red = [];
      while (red.length !== 6) {
        tmp = this.red();
        while (__indexOf.call(red, tmp) >= 0) {
          tmp = this.red();
        }
        red.push(tmp);
      }
      redResult = red.sort(function(a, b) {
        return a > b;
      });
      return console.log("" + redResult + ":" + (this.blue()));
    };

    return Lottery;

  })();

  module.exports = Lottery;

}).call(this);
