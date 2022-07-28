// https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

// Parameters
  // cuts = integer indicating number of cuts in all 3 planes of the cube
// Returns
  // Expects return of a single number indicating how many cubes the cube has been cut into
// Examples
  // For x 'cuts', should return y 'cubes': 
  // 0 -> 1     +0 +2 +4
  // 1 -> 8     +4 +6 +8
  // 2 -> 26    +8 +10 +12
  // 3 -> 56    +12 +14 +26
  // 4 -> 98    +16 +18 +20
  // 5 -> 152   +20 +22 +24
  // 6 -> 218   
// Pseudocode
  // Set cubes to 1
  // If cuts is 0, return cubes
  // Set cubes to 8
  // Set addedCubes to 4
  // For each addition to 'cuts', run the following algorithm:
    // cubes += (addedCubes*3) + 6
    // addedCubes += 4


    var countSquares = function(cuts){
      let cubes = 1
      if(cuts === 0) return cubes
      cubes = 8
      let addedCubes = 4
      for(let i = 1; i < cuts; i++){
        cubes += (addedCubes*3) + 6
        addedCubes += 4
      }
      return cubes
    }
    
    