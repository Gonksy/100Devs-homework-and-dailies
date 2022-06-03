// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n){
  if (n === 0) return '0.00'
  let series = 1
  let denominator = 4
  for (let i = 1; i < n; i++){
    series+= 1/denominator
    denominator+= 3
  }
  series = Math.round(series * 100) / 100
  series = series.toFixed(2)
  return series
}