//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//PREP:
//P: 2 strings strings. English letters. Lowercase. No spaces. No numbers.
//R: 1 string, result of a unique set from the letters of both strings.
//E: "aretheyhere", "yestheyarehere"), "aehrsty"
//P:
function longest(s1, s2) {
  let set1 = [...new Set(s1+s2)].sort().join('')
  return set1
}
