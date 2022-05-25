//https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/train/javascript
// Complete the function which converts a binary number (given as a string) to a decimal number.
//PREP
//P: A single string of 0s and 1s.
//R: Number converted from input binary number.
//E: '1' > 1, '0' > 0, '100' > 4, '101' > 5
//P: 
function binToDec(bin){
  let decimalNum = parseInt(bin, 2)
  return decimalNum
}