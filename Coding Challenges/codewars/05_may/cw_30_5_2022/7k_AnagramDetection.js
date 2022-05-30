// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"
// write the function isAnagram
var isAnagram = function(test, original) {
  test = test.toLowerCase()
  original = original.toLowerCase()
  
  let testCounts = test.split('').sort().reduce((obj, c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  
  let originalCounts = original.split('').sort().reduce((obj, c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  
  let anagramStatus = JSON.stringify(testCounts) === JSON.stringify(originalCounts)
  return anagramStatus
};
