//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
//Unique In Order
var uniqueInOrder=function(iterable){
  let input
  if (Array.isArray(iterable)) input = iterable
  else input = iterable.split('')
  
  let result = input.filter((x,i) => x !== iterable[i-1])
  return result
}

//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
//Convert string to camel case
function toCamelCase(str){
  let words = str.split(/[-_]+/)
  let result = words.map((x,i) => i === 0 ? x : x[0].toUpperCase() + x.slice(1)).join('')
  return result
}

//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
//Your order, please
function order(words){
  let ordered = []
  let array = words.split(' ')
  
  for (let i = 1; i <= array.length; i++){
    let choice = array.filter(x => x.includes(i))
    ordered.push(choice)
  }
  return ordered.join(' ')
}

//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
//Tribonacci Sequence
function tribonacci(signature,n){
  if (n === 0) return []
  
  let result = [...signature]
  
  for (let i = 3; i < n; i++){
    let next = result[result.length-1] + result[result.length-2] + result[result.length-3]
    result.push(next)
  }
  
  return result.slice(0, n)
}

//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
//You're a square!
var isSquare = function(n){
  let test = Math.sqrt(n)
  if (Number.isInteger(test)) return true
  return false    
}