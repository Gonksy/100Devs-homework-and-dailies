// https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript
// Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

// for input:                5, true, false
// expected result would be: [true, false, true, false, true]
// Good luck!
function alternate(n, firstValue, secondValue){
  const result = new Array(n).fill(firstValue).map((x,i) => {
    if (i%2 !== 0) return secondValue
    else return x
  })
  return result
}