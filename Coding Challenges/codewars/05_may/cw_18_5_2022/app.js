//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
//Persistent Bugger.
function persistence(num) {
  let digits = String(num).split('').map(x => +x)
  let divCount = 0
  
  for (let i = 0; 1 < digits.length; i++){
    let product = digits.reduce((acc,c) => acc*c, 1)
    divCount++
    if (product > 9) digits = String(product).split('').map(x => +x)
    else digits = product
  }
  
  return divCount
}

//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
//Count characters in your string
function count (string) {  
  let counts = string.split('').reduce((obj, c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  return counts
}

//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
  let result = []
  
  for (let i = a; i <= b; i++){
    if (i < 10 && i > 0){
      result.push(i)
      continue
    }
    
    let digits = String(i).split('')
    
    for (let i = 0; i < digits.length; i++){
      digits[i] = digits[i] ** (i+1)
    }
    let sum = digits.map(x => +x).reduce((acc,c) => acc+c, 0)
   
    if (i === sum) result.push(i)
  }
  
  return result
}

//https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript
//Name on billboard
function billboard(name, price = 30){
  let test = name.split('').map(x => x = price).reduce((acc,c) => acc+c, 0)
  return test
} 