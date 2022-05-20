//https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

//Answer:
String.prototype.camelCase=function(){
  let string = [...this].join('').split(' ').filter(x => x !== '')
  let camelCase = string.map((x, i) => x[0].toUpperCase() + x.slice(1)).join('')
  return camelCase
}