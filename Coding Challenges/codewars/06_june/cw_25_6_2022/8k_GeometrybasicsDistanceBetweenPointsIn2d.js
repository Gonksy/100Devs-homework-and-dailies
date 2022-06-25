// https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.
function distanceBetweenPoints(a, b) {
  const lineASquared = Math.pow((a.x - b.x), 2)
  const lineBSquared = Math.pow((a.y - b.y), 2)
  const distanceSquared = lineASquared + lineBSquared
  const distance = Math.sqrt(distanceSquared)
  return distance
}