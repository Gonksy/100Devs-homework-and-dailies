//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', gandalfQuote)

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer FpVQarbM7vZy9pN3KE9Q");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let allGandalfQuotes

fetch(`https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0/quote`, requestOptions)
.then(response => response.json())
.then(result => allGandalfQuotes = result)
.catch(error => console.log('error', error));


function gandalfQuote(){
  let quoteSelect = Math.floor(Math.random()*216)
  document.querySelector('h2').innerText = allGandalfQuotes.docs[quoteSelect].dialog
  
}

