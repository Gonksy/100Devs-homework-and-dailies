//https://www.codewars.com/kata/5612e743cab69fec6d000077/train/javascript
//Grasshopper - Variable Assignment Debug
var a = "dev"
var b = "Lab"

var name = a + b

//https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
//Super Duper Easy
function problem(x){
  if (typeof x !== 'number') return 'Error'
  return (x*50) + 6
}

//https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
//Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  if (string[string.length-1] === '!') {
    let array = string.split('')
    array.pop()
    return array.join('')}
  return string
}

//https://www.codewars.com/kata/525c1a07bb6dda6944000031/train/javascript
//Kata Example Twist
var websites = []

for (i = 0; i < 1000; i++){
  websites.push('codewars')
}

//https://www.codewars.com/kata/56e2f59fb2ed128081001328/train/javascript
//Printing Array elements with Comma delimiters
function printArray(array){
  return array.join(',')
}

//https://www.codewars.com/kata/5977618080ef220766000022/train/javascript
//USD => CNY
function usdcny(usd) {
  const cny = usd * 6.75
  return `${cny.toFixed(2)} Chinese Yuan`
}

//https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
//Remove First and Last Character Part Two
function array(arr){
  let result = arr.split(',')
  if (result.length < 3) return null
  return result.slice(1, -1).join(' ')
}
