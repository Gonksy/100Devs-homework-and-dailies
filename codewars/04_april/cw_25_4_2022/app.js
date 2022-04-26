//https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
//Do you speak "English"?
function spEng(sentence){
  let sentenceLower = sentence.toLowerCase();
  let result = false
  if ( sentenceLower.includes('english') ) result = true
  return result
}

//https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript
//String cleaning
function stringClean(s){
  return s.replace(/[0-9]/g, '')
}

//https://www.codewars.com/kata/5641a03210e973055a00000d/train/javascript
//Formatting decimal places #0
function twoDecimalPlaces(n) {
  return +(Math.round(n * 100) / 100).toFixed(2)
}
