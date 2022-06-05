document.querySelector('#rock').addEventListener('click', ()=>{playerChoice('rock')})
document.querySelector('#paper').addEventListener('click', ()=>{playerChoice('paper')})
document.querySelector('#scissors').addEventListener('click', ()=>{playerChoice('scissors')})


function playerChoice(input){
  let pChoice = input
  console.log(pChoice)
  makeReq(pChoice)
}

async function makeReq(pChoice){

  const res = await fetch(`/api?playerchoice=${pChoice}`)
  const data = await res.json()

  console.log({res, data});
  document.querySelector("#result").textContent = data
  // document.querySelector("#personStatus").textContent = data.status
  // document.querySelector("#personOccupation").textContent = data.currentOccupation
}