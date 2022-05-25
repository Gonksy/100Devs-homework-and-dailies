// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript
// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

//PREP:
//P: An array of 0s and 1s of a length that is divisible by 8.
//R: The input array divided into groups of 8, then reversed.
//E: [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] > [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
//P:

function dataReverse(data) {
  let arrL = data.length
  let bytes = arrL/8
  let result = []
  
  for (let i = 0; i < bytes; i++){
    let test = data.splice(-8, 8)
    result = result.concat(test)
  }
  return result
}