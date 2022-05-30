// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript
// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

//all my homies hate regex
function validateUsr(username) {
  let status = true
  let allowed = 'abcdefghijklmnopqrstuvwxyz1234567890_'.split('')
  if (username.length < 4 || username.length > 16) status = false
  username.split('').forEach(x => {
    if (!allowed.includes(x)) status = false
  })
  return status
}