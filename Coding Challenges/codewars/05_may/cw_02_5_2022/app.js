//https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript
//Barking mad
function Dog (breed) {
  this.breed = breed;
  this.bark = function(){
    return "Woof";
  }
}

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

//https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript
//Who is going to pay for the wall?
function whoIsPaying(name){
  if (name.length <= 2) return [name]
  let truncatedName = name[0] + name[1]
  return [name, truncatedName]
}

//https://www.codewars.com/kata/591588d49f4056e13f000001/train/javascript
//8kyu interpreters: HQ9+
function HQ9(code) {
  let result = ''
  if (code == 'H') return 'Hello World!'
  if (code == 'Q') return code
  for (let i = 99; i >= 0; i--){
    if (i === 0){
    result +=  `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    }
    else if (i === 1){
    result +=  `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
    }
    else if (i === 2){
      result += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottle of beer on the wall.\n`
    }
    else result += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottles of beer on the wall.\n`
  }
  if (code == '9') return result
}

