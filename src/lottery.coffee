Chance = require 'chance'

class Lottery
  randomNum: (start, end) ->
    chance = new Chance()
    chance.integer min: start, max: end
  
  blue: () -> @randomNum 1, 15
  
  red: () -> @randomNum 1, 33
    
  bang: () ->
    red = []
    while red.length isnt 6
      tmp = @red()
      tmp = @red() while  tmp in red
      red.push tmp
    redResult = red.sort (a, b) -> a > b
    console.log "#{redResult}:#{@blue()}"

module.exports = Lottery
