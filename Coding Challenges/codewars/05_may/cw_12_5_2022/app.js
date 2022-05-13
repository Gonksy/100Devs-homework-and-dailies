//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
//Flatten and sort an array
function flattenAndSort(array) {
  let result = []
  
  array.forEach(x => {
    if (x.length !== 0) result.push(...x)
  })
  result.sort((a,b) => a-b)
  
  return result;
}

