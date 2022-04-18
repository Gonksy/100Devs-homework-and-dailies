//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
//Total amount of points
function points(games) {
  let points = 0;
  games.forEach(x => points += evaluateScore(x));
  return points;
};

function evaluateScore(str){
  let scores = str.split(':')
  if (scores[0] > scores[1]) return 3;
  if (scores[0] < scores[1]) return 0;
  if (scores[0] == scores[1]) return 1;
};

//https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
//Gravity Flip
const flip=(d, a)=>{
  if (d == 'R') return a.sort((a,b) => a-b);
  if (d == 'L') return a.sort((a,b) => b-a);
};

//https://www.codewars.com/kata/52adc142b2651f25a8000643/train/javascript
//Sleigh Authentication
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === 'Santa Claus' && password === 'Ho Ho Ho!') return true;
  return false;
};


//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
//Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  return n>=10? 90*n : n>=5 ? 95*n : 100*n;
};

//https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
//Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}