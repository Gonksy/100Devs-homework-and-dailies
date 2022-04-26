//https://www.codewars.com/kata/58630e2ae88af44d2b0000ea/train/javascript
//Thinkful - Number Drills: Pixelart planning
function isDivisible(wallLength, pixelSize){
  return wallLength % pixelSize === 0
}

//https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
//How old will I be in 2099?
function  calculateAge(birthYear, checkYear) {
  let difference = birthYear - checkYear
  let year = 'years'
  
  if (Math.abs(difference) === 1) year = 'year'
  
  if (difference < 0) return `You are ${Math.abs(difference)} ${year} old.`
  if (difference === 0) return 'You were born this very year!'
  return `You will be born in ${difference} ${year}.`
}

//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
//Training JS #4: Basic data types--Array
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}

//https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
//Take the Derivative
function derive(coefficient,exponent) {
  let product = coefficient * exponent
  let exponentMinusOne = exponent-1
  return `${product}x^${exponentMinusOne}`
}
