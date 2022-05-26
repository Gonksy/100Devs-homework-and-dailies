// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
// Your task is simply to count the total number of lowercase letters in a string.

// Examples
// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
function lowercaseCount(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let count = 0
  let test = str.split('').forEach(x => {
    if (alphabet.includes(x)) count++
  })
return count
}