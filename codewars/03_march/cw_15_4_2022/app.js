//https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
//Alan Partridge II - Apple Turnover
function apple(x){
  if (x*x > 1000) return "It's hotter than the sun!!"
  return "Help yourself to a honeycomb Yorkie for the glovebox."
}
//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
//Remove duplicates from list
function distinct(a) {
  let filtered = []
  a.forEach(x => {
    if (!filtered.includes(x)) filtered.push(x)
  })
  return filtered;
}
//https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript
//Convert to Binary
function toBinary(n){
  let remainderArray = [];
  let numQuotient = n;
  let numRemainder = 0;
  while(numQuotient > 0){
    numRemainder = numQuotient % 2
    remainderArray.push(numRemainder)
    numQuotient = ~~(numQuotient/2);
  }
  return Number(remainderArray.reverse().join(''))
}