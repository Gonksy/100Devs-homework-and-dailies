//https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
//Training JS #5: Basic data types--Object
function animal(obj){
  let animal = obj
  return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`
}

//https://www.codewars.com/kata/514a3996d22ce03198000003/train/javascript
//Mr. Freeze
Object.freeze(MrFreeze)

//https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
//Grasshopper - Array Mean
var findAverage = function (nums) {
  return nums.reduce((acc, c) => acc+ c, 0)/nums.length
 }

 //https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
 //Add Length
 function addLength(str) {
  let temp = str.split(' ').map(x => `${x} ${x.length}`)
  return temp
}

//https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
//Multiple of index
function multipleOfIndex(array) {
  return array.filter((x,i) => x % i == 0)
}