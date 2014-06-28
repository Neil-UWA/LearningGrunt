require('coffee-script/register')

red = []

randomNum = (base, min) ->
  parseInt(Math.random() * 15) + min

blue = randomNum 15, 1

getRed = () -> randomNum(33, 1)
  
while red.length isnt 6
  tmp = getRed()
  tmp = getRed() while  tmp in red
  red.push tmp

redResult = red.sort((a, b) -> a > b)
console.log "#{redResult}:#{blue}"
