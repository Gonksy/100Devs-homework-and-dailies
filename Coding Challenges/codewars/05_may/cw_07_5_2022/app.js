//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
//Descending Order
function descendingOrder(n){
  let nReverse = +n.toString().split('').sort((a,b)=> b-a).join('')
  return nReverse
}
