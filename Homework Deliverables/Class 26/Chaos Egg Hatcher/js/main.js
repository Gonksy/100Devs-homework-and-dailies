document.querySelector('#digimonImage').addEventListener('click', evolve)
let digimonImage = document.querySelector('#digimonImage')
let digimonTitle = document.querySelector('h2')
let digimonInTraining, 
    digimonRookie, 
    digimonChampion, 
    digimonUltimate, 
    digimonMega;

let currentDigimon = {
  level: 'Mega'
}
fetch(`https://digimon-api.vercel.app/api/digimon`)
  .then(res => res.json())
  .then(data =>{
    digimonInTraining = data.filter(x => x.level =='In Training');
    digimonRookie = data.filter(x => x.level =='Rookie');
    digimonChampion = data.filter(x => x.level =='Champion');
    digimonUltimate = data.filter(x => x.level =='Ultimate');
    digimonMega = data.filter(x => x.level =='Mega');
  })
  .catch(err => {
    console.log(`error ${err}`);
  });

  function evolve(){
    rules = {
      'In Training': digimonRookie,
      'Rookie': digimonChampion,
      'Champion': digimonUltimate,
      'Ultimate': digimonMega,
      'Mega': digimonInTraining,
    }
    randomize(rules[currentDigimon.level])
    digimonImage.src = currentDigimon.img
    digimonTitle.textContent = `${currentDigimon.name} - ${currentDigimon.level}`
    
  }

  function randomize(arr){
  let randomNumber = Math.floor(Math.random() * arr.length)
  currentDigimon = arr[randomNumber]
}
