//https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript
//Welcome to the City
function sayHello( name, city, state ) {
  let fullName
  if (name.length > 1) fullName = name[0] + ' ' + name[1]
  else fullName = name[0]
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

//https://www.codewars.com/kata/545991b4cbae2a5fda000158/train/javascript
//Enumerable Magic #3 - Does My List Include This?
function include(arr, item){
  return arr.includes(item)
}

//https://www.codewars.com/kata/57faece99610ced690000165/train/javascript
//Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove (string) {  
  let correctedString = string.split('')
  while (correctedString[correctedString.length-1] == '!') correctedString.pop()
  return correctedString.join('')
}

//https://www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript
//Training JS #3: Basic data types--String
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  let dad = d1 + a2 + d2
  return dad;
}
function Bee(){
  let bee = b1 + e2 + e2
  return bee;
}
function banana(){
  let banana = b2 + a2 + n2 + a2 + n2 + a2
  return banana;
}

function answer1(){
    return "no";
}
function answer2(){
  return "no";
}
function answer3(){
  return "yes";
}

