//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
//Exes and Ohs
function XO(str) {
  let counts = str.toLowerCase().split('').reduce((obj, c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  return counts['x'] === counts['o']
}

//https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba/train/javascript
//Type of sum
function typeOfSum(a, b) {
  return typeof (a+b)
}

//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
//Break camelCase
function solution(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  let newString = ''
  
  for (let i = 0; i < string.length; i++){
    if ( alphabet.includes(string[i]) ) newString+= string[i]
    else {
      newString+= ' '
      newString+= string[i]
    }
  }
 
  return newString 
}

//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
//Highest Scoring Word
function high(x){
  const alphabet = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26}
  let array = x.split(' ')
  let test = array.map(x => x.split(''))
  let wordcounts = test.map(x => x.map(y => alphabet[y]).reduce((acc,c) => acc+c, 0))

  let highest = ''
  for (let i = 0; i < wordcounts.length; i++){
    if (wordcounts[i] > highest) highest = wordcounts[i]
  }
  
  let index = wordcounts.findIndex(x => x === highest)
  let choice = array[index]
  
  return choice
}