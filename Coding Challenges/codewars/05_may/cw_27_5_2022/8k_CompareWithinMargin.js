// https://www.codewars.com/kata/56453a12fcee9a6c4700009c/train/javascript
// close to, or higher than b.

// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

// Please note the following:

// When a is close to b, return 0.
// Otherwise...

// When a is less than b, return -1.

// When a is greater than b, return 1.

// If margin is not given, treat it as zero.

// Assume: margin >= 0

// Tip: Some languages have a way to make parameters optional.
function closeCompare(a, b, margin){
  let difference = a-b
  if (Math.abs(difference) <= Math.abs(margin) || difference === 0) return 0
  if (difference > 0) return 1
  return -1
}
