//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
//Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr){
  if ( !Array.isArray( arr ) ) return 'It\'s a fake array'
  if ( arr.indexOf( 5 ) !== -1 && arr.indexOf( 13 ) !== -1 ) return 'It\'s a black array'
  return 'It\'s a white array'
}

//https://www.codewars.com/kata/55a14f75ceda999ced000048/train/javascript
//Template Strings
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
//Shortest Word
function findShort(s){
  let array = s.split(' ').sort((a,b) => a.length - b.length)
  return array[0].length
}

//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
//Consecutive strings
function longestConsec(strarr, k) {
  if (strarr.length === 0 || !Array.isArray(strarr) || k < 0 || k > strarr.length) return ''
  
  let combinedArr = []
  for (let i = 0; i < strarr.length; i++){
    let test = ''
    test+= strarr.slice(i, i+k)
    test = test.split(',').join('')
    combinedArr.push(test)
  }
  combinedArr.reverse()
  
  let choice = combinedArr[0]
  combinedArr.forEach(x => {
    if (x.length >= choice.length) choice = x 
  })  
  return choice
}

//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
//String ends with?
function solution(str, ending){
  let test = str.endsWith(ending)
  return test
}

//https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript
//Get number from string
function getNumberFromString(s) {
  let numbers = [1,2,3,4,5,6,7,8,9,0]
  let test = s.split('').filter(x => numbers.includes(+x)).join('')
  return +test.split(' ').join('')
}