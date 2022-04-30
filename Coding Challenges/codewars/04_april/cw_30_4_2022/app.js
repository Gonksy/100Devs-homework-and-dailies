//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
//Training JS #8: Conditional statement--switch
function howManydays(month){
  var days;
  switch (month){
      case 2:
      days = 28
      break
      
      case 4:
      days = 30
      break
      
      case 6:
      days = 30
      break
      
      case 9:
      days = 30
      break
      
      case 11:
      days = 30
      break
      
      default:
      days = 31
      break
  }
  return days;
}

//https://www.codewars.com/kata/5834fec22fb0ba7d080000e8/train/javascript
//BASIC: Making Six Toast.
function sixToast(num) {
  return Math.abs(6-num)
}

//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
//Sum of differences in array
function sumOfDifferences(arr) {
  if (arr.length < 2) return 0
  const arrAsc = arr.sort((a,b)=>a-b)
  const arrSub = []
  for (let i = 0; i < arrAsc.length-1; i++){
    arrSub.push(arrAsc[i+1] - arrAsc[i])
  }
  const sum = arrSub.reduce((acc,c) => acc+c, 0)
  
  console.log({arrAsc, arrSub, sum})
  
  return sum
}

//https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
//Classy Classes
class Person {
  constructor(name, age) {
  this.name = name
  this.age = age
  }
  get info(){
    return `${this.name}s age is ${this.age}`
  }
}
