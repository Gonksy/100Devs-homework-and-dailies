// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
  let odds = array.filter( x => x%2 !== 0).sort((a,b) => a-b)
  let spaced = array.map( x => { 
    if (x%2 !== 0) return null
    else return x
  })
  
  let i = -1
  let sortedArray = spaced.map(x => {
    if (x === null) {
      i++
      return odds[i]
    }
    else return x
  })

  return sortedArray
}


//Refactored:
function sortArray2(array) {
  const odd = array.filter(x => x%2 !== 0).sort((a,b) => a-b)
  const sortedArray = array.map(x => {
    if (x%2 === 0 ) return x
    else return odd.shift()
  })
  return sortedArray
}