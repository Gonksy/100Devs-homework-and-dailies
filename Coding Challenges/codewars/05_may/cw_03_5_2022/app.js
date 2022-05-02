//https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
//Define a card suit
const suits = {
  "\u2663": 'clubs',
  "\u2666": 'diamonds',
  "\u2665": 'hearts',
  "\u2660": 'spades'
}
function defineSuit(card) {
  let suit = card[card.length-1]
  return suits[suit]
}

//https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript
//Fix your code before the garden dies!
function rainAmount(mm){
  if (mm >= 40) return "Your plant has had more than enough water for today!"     
  return `You need to give your plant ${40-mm}mm of water`
}

//https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript
//Enumerable Magic #1 - True for All?
function all( arr, fun ){
  let result = true
  arr.forEach(x => fun(x) ? result = true : result = false)
  return result
}

//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
//Create Phone Number
function createPhoneNumber(numbers){
  let section1 = numbers.slice(0, 3).join('')
  let section2 = numbers.slice(3, 6).join('')
  let section3 = numbers.slice(6, 10).join('')
  let phoneNumber = `(${section1}) ${section2}-${section3}`
  return phoneNumber
}

//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript 
//Detect Pangram
function isPangram(string){
  let fixedString = string.toLowerCase()
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  return alphabet.every(x => fixedString.includes(x))
}

//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//Square Every Digit
function squareDigits(num){
  let digits = String(num).split('').map(x => +x*+x).join('')
  return +digits
}