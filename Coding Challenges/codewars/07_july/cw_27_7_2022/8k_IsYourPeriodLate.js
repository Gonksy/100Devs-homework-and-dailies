// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript
// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
function periodIsLate(last, today, cycleLength){
  const diffTime = Math.abs(today - last)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays > cycleLength
}