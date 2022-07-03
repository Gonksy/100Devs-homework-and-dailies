// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
function twoSum(numbers, target) {
  const answer = []
  
  for (let i = 0; i < numbers.length; i++){
    
    const remainder = target-numbers[i]
    let index1, index2
    
    if (numbers.includes(remainder)) {
      index1 = numbers.lastIndexOf(numbers[i])
      index2 = numbers.indexOf(remainder)
    }
    
    if (index1 !== index2) {
      answer.push(index1)
      answer.push(index2)
    }
   
    if (answer.length === 2) break  
  }

  return answer
}