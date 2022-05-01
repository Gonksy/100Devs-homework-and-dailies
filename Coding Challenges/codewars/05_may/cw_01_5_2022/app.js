//https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
//Object Oriented Piracy
function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;

  this.isWorthIt = function(){
    let peopleWeight = crew*1.5
    let difference = draft - peopleWeight
    if (difference > 20) return true
    return false
  }
}

//https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript
//Is there a vowel in there?
const vowels = {
  097: 'a',
  101: 'e',
  105: 'i',
  111: 'o',
  117: 'u'
}

function isVow(a){
 return a.map(x => vowels[x] || x)
}