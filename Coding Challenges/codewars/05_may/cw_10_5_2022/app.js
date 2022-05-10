//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
//Find the unique number
function findUniq(arr) {
  let counts = arr.reduce((obj,c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  
  let choice = +Object.keys(counts).find(key => counts[key] == 1)
  
  return choice
}

//https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
//Are they the "same"?
function comp(array1, array2){
  if (!array1 || !array2) return false
  
  let status = false
  let shared = []
  
  for(let i = 0; i < array2.length; i++){
    let arr2 = Math.sqrt(array2[i])
    
    for(let j = 0; j < array1.length; j++){
      let arr1 = array1[j]
      
      if(arr1 == arr2){
        shared.push(`${i}-${j}`)
        array1.splice(j, 1)
        break
      }
    }
  }
  
  if (shared.length == array2.length) status = true
  return status
}
