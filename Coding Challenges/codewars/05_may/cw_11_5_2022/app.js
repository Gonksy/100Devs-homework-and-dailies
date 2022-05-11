//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
//CSV representation of array
function toCsvText(array) {
  let result = [...array].join('\n')
  return result
}

//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
//Sort array by string length
function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
};

//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
//Highest Rank Number in an Array
function highestRank(arr){
  let counts = arr.reduce((obj,c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  let maximum = 0
  let chosenKey
  for (let key in counts){
    if (counts[key] > maximum) {
      maximum = counts[key]
      chosenKey = key
    }
   
    if (counts[key] === maximum) {
      if (key > chosenKey){
        chosenKey = key
      }
    }
    
  }
  return +chosenKey
}