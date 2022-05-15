//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
//Delete occurrences of an element if it occurs more than n times
function deleteNth(arr,n){
  let counts = {}
  let newArr = []
  arr.forEach(x => {
    if (!counts[x]) counts[x] = 0
    if (counts[x] < n) newArr.push(x)
    counts[x]++
  })
  return newArr
}

//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript\
//Build Tower
function towerBuilder(nFloors) {
  let build = []
  
  for (let i = 1; i <= nFloors; i++){
    let string = ''
    
    //Formula for number of spaces and stars for current floor
    let starCount = 1 + ( 2* ( i-1 ) )
    let spaceCount = nFloors - i
    
    //Creating strings with correct number of spaces and stars
    let spaces = new Array(spaceCount).fill(' ').join('')
    let stars = new Array(starCount).fill('*').join('')
    
    string+= spaces
    string+= stars
    string+= spaces
    
    build.push(string)
  } 
  
  return build
}

//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
  let sortedNums = numbers.sort((a,b)=> a-b)
  return sortedNums[0] + sortedNums[1]
}

//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
//Beginner Series #3 Sum of Numbers
function getSum( a,b ){
  let bigArray = []
  let array = [a,b].sort((a,b) => a-b)
  
  for (let i = array[0]; i <= array[1]; i++){
    bigArray.push(i)
  }
  
  let bigSum = bigArray.reduce((acc,c) => acc+c, 0)
  return bigSum
  
}