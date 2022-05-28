// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/javascript
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

function nearestSq(n){
  let result = 0
  if (Math.sqrt(n) % 1 === 0) result = n
  else {
    for (let i = 0; result === 0; i++){
      let plus = n+i
      let minus = n-i
      if (Math.sqrt(plus) % 1 === 0) {
        result = plus
      }
      if (Math.sqrt(minus) % 1 === 0) {
        result = minus
      }

    }

  }
  return result
}