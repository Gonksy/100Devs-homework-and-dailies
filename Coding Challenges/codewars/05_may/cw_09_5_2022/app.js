//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
//Mumbling
function accum(s) {
  let result = s.split('').map((x, ind) => {
    let element = x.toUpperCase()
    for (let i = 0; i < ind; i++){
      element += x.toLowerCase()
    }
    return element
  }).join('-')
	return result
}

//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
//Split Strings
function solution(str){
  let temp = str
  let array = []
   
  if (temp.length % 2 !== 0) {
     array.unshift(`${temp.slice(-1)}_`)
     temp = temp.slice(0, -1)
   }
  
  for (let i = temp.length; i > 0; i-=2){
    array.unshift(temp.slice(i-2, i))
     
   }
  
  return array
}