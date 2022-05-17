//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
//Equal Sides Of An Array
function findEvenIndex(arr){
  let leftSide, rightSide;
  let status = -1
  
  for (let i = 0; i < arr.length; i++){
    leftSide = arr.slice(0, i).reduce((acc,c) => acc+c, 0);
    rightSide = arr.slice(i+1, arr.length).reduce((acc,c) => acc+c, 0);
    if (rightSide === leftSide) {
      status = i
      break;
    }
  }
  
    return status;
}

//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
//Count the smiley faces!
function countSmileys(arr) {
const eyes = [':', ';']
const noses = ['-', "~"]
const mouths = [')', 'D']
let validSmileyCount = 0

arr.forEach(x => {
  if (!eyes.includes(x[0]) || 
      !mouths.includes(x[x.length-1]) ||
      x.length > 3) return
  if (x.length === 3 && !noses.includes(x[1])) return
  validSmileyCount++
})
return validSmileyCount
}

//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
//Growth of a Population
function nbYear(initialPop, percentIncrease, flatIncrease, targetPop) {
  let currentPop = initialPop
  let years = 0
  
  for (let i = 0; currentPop < targetPop; i++){
    currentPop+= Math.floor((currentPop*(percentIncrease/100)))
    currentPop+= flatIncrease
    years++
  }
  
  return years
}