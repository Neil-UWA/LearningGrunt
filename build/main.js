(function() {
  var Lottery, i, lottery, _i, _len, _ref;

  Lottery = require('./lottery');

  lottery = new Lottery();

  if (process.argv.length >= 3) {
    _ref = [0, process.argv[2]];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      lottery.bang();
    }
  } else {
    lottery.bang();
  }

}).call(this);
