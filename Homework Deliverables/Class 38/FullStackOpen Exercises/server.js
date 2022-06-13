const express = require('express');
const app = express();

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = +req.params.id
  const entry = persons.find(x => x.id === id)
  console.log({id, entry})
  if (entry) res.json(entry)
  else res.status(404).end()
  
})

app.get('/info', (req, res) => {
  const date = new Date()
  res.send(`Phonebook has info for 2 people <br>${date}`)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = +req.params.id
  persons = persons.filter(x => x.id !== id)
  res.send(`Entry ${id} deleted.`)

})

app.post('/api/persons/:name&number', (req, res) => {
  const maxId = persons.length > 0 
  ? Math.max(...persons.map(n => n.id))
  : 0
  const entry = request.body
  if (!entry.name || !entry.number) return res.status(404).end()
  if (persons.find(x => x.name === entry)) return res.status(404).end()
  entry.id = maxId + 1

  persons = persons.concat(name)
  res.json(entry)
})

app.listen(8000, function() {
  console.log('Listening on 8000')
})