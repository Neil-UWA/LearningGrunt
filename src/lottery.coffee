require 'coffee-script/register'
Chance = require 'chance'

red = []

randomNum = (start, end) ->
  chance = new Chance.integer()
  chance.integer min: start, max: end

blue = randomNum 1, 15

getred = () -> randomNum(1, 33)
  
while red.length isnt 6
  tmp = getred()
  tmp = getred() while  tmp in red
  red.push tmp

redResult = red.sort((a, b) -> a > b)
console.log "#{redResult}:#{blue}"
