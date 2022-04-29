//https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript
//Grader
function grader(score) {
  if (score < 0.6 || score > 1) return 'F'
  if (score >= 0.9 ) return 'A'
  if (score >= 0.8 ) return 'B'
  if (score >= 0.7 ) return 'C'
  if (score >= 0.6 ) return 'D'
}

//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript
//Return the day
function whatday(num) { 
  if (num == 1) return 'Sunday'
  if (num == 2) return 'Monday'
  if (num == 3) return 'Tuesday'
  if (num == 4) return 'Wednesday'
  if (num == 5) return 'Thursday'
  if (num == 6) return 'Friday'
  if (num == 7) return 'Saturday'
  return 'Wrong, please enter a number between 1 and 7'
  }

//https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
//"this" is a problem
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${first} ${last}`
}

//https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
//No Loops 2 - You only need one
function check(a,x){
  return a.includes(x)
};

//https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript
//Price of Mangoes
function mango(quantity, price){
  if (quantity <= 2) return quantity*price
  return (quantity * (price * 2/3))
}

//https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript
//Price of Mangoes
function mango(quantity, price){
  let result = (Math.ceil(quantity*2/3)) * price
  return result
}

//https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
//Sum of Multiples
function sumMul(n,m){
  if (n <= 0 || m <= 0) return 'INVALID'
  let multiples = []
  for (let i = n; i < m; i+=n){
    multiples.push(i)
  }
  let sum = multiples.reduce((acc,c)=> acc+c, 0)
  return sum
}

//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
//Training JS #10: loop statement --for
function pickIt(arr){
  const odd=[],even=[];
  for (let i = 0; i < arr.length; i++){
    if (arr[i]%2 == 0) even.push(arr[i])
    else odd.push(arr[i])
  }
  
  
  return [odd,even];
}