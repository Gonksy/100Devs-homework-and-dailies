//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
//Disemvowel Trolls
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return str.split('').filter(element => !vowels.includes(element)).join('')
}

//https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript
//Pre-FizzBuzz Workout #1
function preFizz(n) {
  let result = []
  for (let i = 1; i <= n; i++){
    result.push(i)
  }
  return result
}

//https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript
//Grasshopper - Terminal game combat function
function combat(health, damage) {
  let newHealth = health - damage
  return newHealth <= 0 ? 0 : newHealth
}

//https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript
//Training JS #2: Basic data types--Number
var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a=v4   //set number value to a
  var b=v2   //set number value to b
  return a-b;
}
function equal3(){
  var a=v1   //set number value to a
  var b=v5   //set number value to b
  return a*b;
}
function equal4(){
  var a=v4   //set number value to a
  var b=v5   //set number value to b
  return a/b;
}
function equal5(){
  var a=v6   //set number value to a
  var b=v3  //set number value to b
  return a%b;
}

//https://www.codewars.com/kata/511f0fe64ae8683297000001
//Basic Training: Add item to an Array
websites.push('codewars') 

//https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript
//Reversing Words in a String
function reverse(string){
  return string.split(' ').reverse().join(' ')
}

//https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript
//Smallest unused ID
function nextId(ids){
  let uniqueIds = [...new Set(ids)]
  let sortedIds = uniqueIds.sort((a,b) => a-b);
  let smallestId = sortedIds.findIndex((element, index) => element != index);
  if (smallestId == -1) return sortedIds[sortedIds.length-1]+1;
  return smallestId
}

//https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript
//Color Ghost
const Ghost = function() {
  this.color = rules[Math.ceil(Math.random()*4)]
};

const rules = {
  1: 'white',
  2: 'yellow',
  3: 'purple',
  4: 'red'
}
