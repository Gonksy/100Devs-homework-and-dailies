//https://www.codewars.com/kata/55c933c115a8c426ac000082/train/javascript
//Switch/Case - Bug Fixing #6
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b; break;
    case'*': result = value.a * value.b; break;
    case'%': result = value.a % value.b; break;
    case'^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}
  
//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
//Check same case
function sameCase(a, b){
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const lowerCase = alphabet.slice(0, 26)
  const upperCase = alphabet.slice(26)
  if (!alphabet.includes(a) || !alphabet.includes(b)) return -1
  
  if (lowerCase.includes(a) && lowerCase.includes(b) || upperCase.includes(a) && upperCase.includes(b)) return 1
  
  return 0;
}

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
//List Filtering
function filter_list(l) {
  let filteredList = l.filter(x => typeof x !== 'string')
  return filteredList
}

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
//Simple Pig Latin
function pigIt(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  
  let result = str.split(' ').map( x => {
    if (alphabet.includes(x[0].toLowerCase())) return x.slice(1) + x[0] + 'ay'
    else return x
  }).join(' ')
  
  return result
}


let numberX = 1
numberX = 2
numberX = 3
console.log(`This is number ${numberX}`)
console.log(`This is number ${numberX}`)
console.log(`This is number ${numberX}`)