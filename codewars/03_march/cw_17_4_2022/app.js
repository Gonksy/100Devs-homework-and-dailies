//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript
//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  let array1 = array.map(x => {
    if ( Number.isInteger(Math.sqrt(x)) == true ) return Math.sqrt(x)
    else return x*x
  })
  return array1;  
}

//https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript
//Swap Values
//DOESN'T WORK
function swapValues(arr) {
  let array1 = [...arr] //1,2
  let temp = array1[0] //1
  array1[0] = array1[1] // 1 => 2
  array1[1] = temp // 2 => 1
  return array1
}
