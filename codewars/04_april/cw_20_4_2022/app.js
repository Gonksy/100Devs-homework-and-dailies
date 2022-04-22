//https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
//Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
  return arr.slice(0, n)
}

//https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
//No zeros for heros
function noBoringZeros(n) {
  if (!n) return 0
  let x = n
  while (x % 10 == 0){
    x = x/10
  }
  return x
}