const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const champions = {
  'veigar': {
    'name': 'Veigar',
    'class': 'Mage',
    'position': 'Mid lane',
    'ultimate': 'Primordial Burst'
  },
  
  'lux': {
    'name': 'Lux',
    'class': 'Mage',
    'position': 'Mid lane',
    'ultimate': 'Final Light'
  },
  
  'unknown': {
    'name': '?',
    'class': '?',
    'position': '?',
    'ultimate': '?'
  }


}

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:champ', (req, res)=>{
  const champ = req.params.champ.toLowerCase()
  if (champions[champ]) res.json(champions[champ])
  else res.json(champions['unknown'])
})


app.listen(process.env.PORT || PORT, ()=> {
  console.log(`Ayo we live we live on ${PORT}`)
})