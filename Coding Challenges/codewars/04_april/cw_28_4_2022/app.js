//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
//Find the odd int
function findOdd(arr) {
  let counts = arr.reduce((obj, element) => {
    if (!obj[element]) {
      obj[element] = 0;}
    obj[element]++;
    return obj;
  }, {})
  let countsEntries = Object.entries(counts)
  let result = +countsEntries.find(x => x[1]%2 !== 0)[0]
  return result
}

//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
//Complementary DNA
function DNAStrand(dna){
  
  const symbols = {
    A:'T',
    T:'A',
    G:'C',
    C:'G'
  }
  let pairStrand = dna.split('').map( x => symbols[x]).join('')
  return pairStrand
}

//https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
//Remove the time
function shortenToDate(longDate) {
  const shortDate = longDate.split(',')[0]
  return shortDate
}

//https://www.codewars.com/kata/582dafb611d576b745000b74/train/javascript
//For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
var quote = function(fighter) {
  if (fighter.toLowerCase() == 'george saint pierre') return 'I am not impressed by your performance.'
  return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
};

//https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
//simple calculator
function calculator(a,b,sign){
  const methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  } 
  if (typeof a !== 'number' || typeof b !== 'number' || !methods[sign]) return 'unknown value' 
  let result = methods[sign](a,b)
  return result
}

