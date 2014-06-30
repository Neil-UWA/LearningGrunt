Lottery = require './lottery'

lottery = new Lottery()

if process.argv.length >= 3
  lottery.bang() for i in [0, process.argv[2]]
else
  lottery.bang()
