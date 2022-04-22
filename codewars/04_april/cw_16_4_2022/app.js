//https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
//Find Multiples of a Number
function findMultiples(integer, limit) {
  let array1 = [integer]
  while ((array1[array1.length-1] + integer) <= limit) array1.push(integer+integer)
  return array1
}

console.log(findMultiples(5, 15))
