// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291
function uniTotal (string) {
  
  const asciiArray = string
  .split('')
  .map((x) => x.charCodeAt(0))
  
  
  const uniTotal = asciiArray.reduce((acc,c) => acc+c, 0)
  return uniTotal
}