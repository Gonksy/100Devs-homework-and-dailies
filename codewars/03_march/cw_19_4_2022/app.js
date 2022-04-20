// https://www.codewars.com/kata/5899642f6e1b25935d000161
// Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  let arr4 = [...new Set(arr3)];
  return arr4.sort((a,b)=>a-b);
}

// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript
// L1: Bartender, drinks!
function getDrinkByProfession(param){
  let choice = param.toLowerCase();
  const drinks = {
    'jabroni': 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    'programmer': 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    'politician': 'Your tax dollars',
    'rapper': 'Cristal'
  }
  if (!drinks[choice]) return 'Beer';
  return drinks[choice];
}

// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s){
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return s.split('').map(x => vowels.includes(x) ? '!' : x).join('');
}
