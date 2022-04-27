//https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
//Find the position!
function position(letter){
  const letters = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  u:21,
  v:22,
  w:23,
  x:24,
  y:25,
  z:26
  }
  
  return `Position of alphabet: ${letters[letter.toLowerCase()]}`
  }

//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
//Expressions Matter
function expressionMatter(a, b, c) {
  let choices = []
  choices.push(a + b + c)
  choices.push(a * b * c)
  choices.push((a + b) * c)
  choices.push(a * (b + c))
  choices.sort((a,b) => b-a)
  return choices[0]
}

//https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
//Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
  let result = s.split('')
  for (let i = 0; i < n; i++){
    let target = result.findIndex(x => x === '!')
    if (target === -1) break
    result.splice(target, 1)
  }
  return result.join('')
}

//https://www.codewars.com/kata/55ccdf1512938ce3ac000056/train/javascript
//A Strange Trip to the Market
function isLockNessMonster(s) {
  if (s.includes('tree fiddy') || s.includes('3.50')) return true
  return false
}

//https://www.codewars.com/kata/557af9418895e44de7000053/train/javascript
//repeatIt
const repeatIt = function(str, n) {
  if (typeof str !== 'string') return 'Not a string'
  let result = ''
  for (let i = 0; i < n; i++){
    result += str
  }
  return result
}

//https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
//Pillars
function pillars(num_pill, dist, width) {
  let distInCm = dist*100
  if (num_pill == 1) return 0
  if (num_pill == 2) return distInCm
  let result = ((num_pill-1) * distInCm) + ((num_pill-2) * width)
  return result
}

//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
//Reverse words
function reverseWords(str) {
  let array = str.split(' ')
  let arrayReverse = array.map(x => x.split('').reverse().join(''))
  return arrayReverse.join(' ')
}

//https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript
//Tip Calculator
function calculateTip(amount, rating) {
  let multiplier = {
    terrible: 0,
    poor: 0.05,
    good: 0.1,
    great: 0.15,
    excellent: 0.20,
  }
  if (multiplier[rating.toLowerCase()] === undefined) return 'Rating not recognised'
  let tip = Math.ceil(amount * multiplier[rating.toLowerCase()])
  return tip
}

//https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript
//Are arrow functions odd?
function odds(values){
  // arrow it
  return values.filter(x => x%2 !== 0 );
}

//https://www.codewars.com/kata/55f73f66d160f1f1db000059/train/javascript
//Grasshopper - Combine strings
function combineNames(x, y){
  return `${x} ${y}`
}

//https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
//Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
function remove (string) {
  let cleanString = string.split('').filter(x => x !== '!').join('')
  return `${cleanString}!`
}

//https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
//Fundamentals: Return
function add(a,b){
  return a+b
}

function divide(a,b){
  return a/b
}

function multiply(a,b){
  return a*b
}

function mod(a,b){
  return a%b
}
 
function exponent(a,b){
  return a**b
}
  
function subt(a,b){
  return a-b
}

//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
//Training JS #6: Basic data types--Boolean and conditional statements if..else
function trueOrFalse(val){
  if (val) return 'true'
  return 'false'
}