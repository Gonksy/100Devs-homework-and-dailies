// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {
  return a != b
}



//Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

function getChar(c){
  return String.fromCharCode(c)
}

//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

function mouthSize(animal) {
  if (animal.toLowerCase() == 'alligator') return 'small'
  return 'wide'
}