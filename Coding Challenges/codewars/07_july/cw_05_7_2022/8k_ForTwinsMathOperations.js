// https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript
// Task:
// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.
function iceBrickVolume(radius, bottleLength, rimLength) {
  const blockLength = bottleLength - rimLength
  const blockVolume = radius * radius * blockLength * 2
  return blockVolume
}