//https://www.codewars.com/kata/56d49587df52101de70011e4/train/javascript
//Leonardo Dicaprio and Oscars
function leo(oscar){
  if (oscar > 88) return "Leo got one already!"
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy"
  if (oscar === 86) return "Not even for Wolf of wallstreet?!"
  return "When will you give Leo an Oscar?"
}

//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
//Isograms
function isIsogram(str){
  let arrLow =  str.toLowerCase().split('')
  let counts = arrLow.reduce((obj, c) => {
    if (!obj[c]) obj[c] = 0
    obj[c]++
    return obj
  }, {})
  
  let status = Object.keys(counts).findIndex(key => counts[key] > 1)
  
  if (status === -1) return true
  return false
}