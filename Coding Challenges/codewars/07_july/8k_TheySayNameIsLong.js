// https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/javascript
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples
// isOpposite("ab","AB") should return true;
// isOpposite("aB","Ab") should return true;
// isOpposite("aBcd","AbCD") should return true;
// isOpposite("AB","Ab") should return false;
// isOpposite("","") should return false;
function isOpposite(s1,s2){
  if (s1 === '' || s2 === '') return false  
  
  const s1Reverse = s1.split('').map(x => {
    if (x.toUpperCase() === x) return x.toLowerCase()
    return x.toUpperCase()
  }).join('')
  if (s1Reverse === s2) return true
  return false
}