// https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
function slope(points){
  const a = points[0]
  const b = points[1]
  const c = points[2]
  const d = points[3]
  const ySum = (d-b)
  const xSum = (c-a)
  if (xSum === 0) return'undefined'
  const slope = String(ySum/xSum)
  return slope
}