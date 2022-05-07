//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
//Playing with digits
function digPow(n, p){
  let digits = n.toString().split('').map(x => +x)
  let sum = digits.map((x, i) => x**(p+i)).reduce((acc,c) => acc+c, 0)
  let result = -1
  
  for (let i = 1; i < 100000; i++){
    if (n * i == sum) {
      result = i
      break
    }
  }
  console.log({digits, sum, result})
  return result
}
