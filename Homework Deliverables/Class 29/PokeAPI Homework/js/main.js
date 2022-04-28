//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeName = []
  let pokeWeight = []
  let pokeImg = []
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        pokeName.push(data.name)
        pokeWeight.push(data.weight)
        pokeImg.push(data.sprites.front_shiny)
        
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          pokeName.push(data.name)
          pokeWeight.push(data.weight)
          pokeImg.push(data.sprites.front_shiny)

          let heavier = 0
          let heavierName = ''
          let lighterName = ''
          
          if((pokeWeight[0] > pokeWeight [1])){
            document.querySelector('#pokeImg1').src = pokeImg[0]
            document.querySelector('#pokeImg2').src = pokeImg[1]
            heavier = pokeWeight[0] / pokeWeight[1]
            heavierName = pokeName[0]
            lighterName = pokeName[1]
          }
          else {
            document.querySelector('#pokeImg1').src = pokeImg[1]
            document.querySelector('#pokeImg2').src = pokeImg[0]
            heavier = pokeWeight[1] / pokeWeight[0]
            heavierName = pokeName[1]
            lighterName = pokeName[0]


          }
          document.querySelector('h2').innerText = `${heavierName} is ${Math.round(heavier)} times heavier than ${lighterName}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}