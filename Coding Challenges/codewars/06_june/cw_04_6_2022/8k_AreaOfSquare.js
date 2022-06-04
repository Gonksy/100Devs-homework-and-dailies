// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
function squareArea(A){
  const circumference = A * 4
  const radius = circumference / 2 / Math.PI
  const squareArea = Number((radius * radius).toFixed(2))
  return squareArea
}