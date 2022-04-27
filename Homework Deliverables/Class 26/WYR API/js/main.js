//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFunFact)

function getFunFact(){
  fetch('https://api.aakhilv.me/fun/wyr')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('h2').innerText = data
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

