//Anki: Filter range

arr1 = [1,2,3,4,5,6,7,8,9]

function filterRange(arr, a, b){
  return arr.filter(x => a <= x && x <= b)
}

console.log(filterRange(arr1, 3, 6))

//https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript
function helloWorld(){
  var str = 'Hello World!'
  console.log(str)
}

//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
//A wolf in sheep's clothing
function warnTheSheep(queue) {
  if (queue[queue.length-1] === 'wolf') return "Pls go away and stop eating my sheep"
  let wolfPosition = queue.reverse().indexOf('wolf')
  return `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`
}

//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
//Lario and Muigi Pipe Problem
function pipeFix(numbers){
  let start = numbers[0]
  let end = numbers[numbers.length-1]
  let array = []
  for (i = start; i <= end; i++){
    array.push(i)
  }
    return array
}

//https://www.codewars.com/kata/57a5015d72292ddeb8000b31/train/javascript
//Palindrome Strings
function isPalindrome(line) {
  if (line === line.split('').reverse().join('')) return true
  return false
}