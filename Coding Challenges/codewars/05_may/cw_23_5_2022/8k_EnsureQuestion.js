// https://www.codewars.com/kata/5866fc43395d9138a7000006/train/javascript
// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

//PREP
//P: string, either ending in '?' or not.
//R: if string doesn't end with '?' return string + '?', else return string.
//E: 'abcd', '123' > 'abcd?', '123?'. 'abcd?' > 'abcd?'
//P:

function ensureQuestion(s) {
  if (s[s.length-1] !== '?') return s+'?'
  return s
}