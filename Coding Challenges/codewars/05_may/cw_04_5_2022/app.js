//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
//Who likes it?
function likes(names) {
  if (!names[0]) return 'no one likes this'
  if (names.length === 1) return `${names[0]} likes this`
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
}

//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
//Array.diff
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x))
}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
//Counting Duplicates
function duplicateCount(text){
  let string = text.toLowerCase().split('')
  let counts = string.reduce((obj, c, i) => {
    if (!obj[c]) obj[c] = 0;
    obj[c]++
    return obj
  }, {})
  let duplicates = Object.entries(counts).filter(x => x[1] > 1)
  
  if (!duplicates) return 0
  return duplicates.length

  
}

//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
//Duplicate Encoder
function duplicateEncode(word){
  let wordArr = word.toLowerCase().split('')
  let counts = wordArr.reduce((obj,c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  
  
  let result = wordArr.map((x,i) => {
    if (counts[x] == 1) return '('
    return ')'
  }).join('')
  
  
  return result
}


//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
//Take a Ten Minutes Walk
function isValidWalk(walk) {
  if (walk.length !== 10) return false
  let counts = walk.reduce((obj, c)=> {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  
  if (counts['s'] !== counts['n'] || counts['w'] !== counts['e']) return false
  return true
}

//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
//Replace With Alphabet Position
function alphabetPosition(text) {
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  let result = text
                    .toLowerCase()
                    .split('')
                    .filter(x => alphabet[x])
                    .map(x => alphabet[x])
                    .join(' ')
  return result
}

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
//Highest and Lowest
function highAndLow(numbers){
  let numbersArr = numbers.split(' ').map(x => +x).sort((a,b)=>a-b)
  let result = `${numbersArr[numbersArr.length-1]} ${numbersArr[0]}`
  return result
}