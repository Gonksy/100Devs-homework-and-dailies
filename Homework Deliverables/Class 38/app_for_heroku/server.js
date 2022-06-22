console.log("We're live!")

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const PORT = 8000

MongoClient.connect('mongodb+srv://gonksy:movingBox1@cluster0.sg6td86.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    const db = client.db('moving-box-tracker')
    const box1 = db.collection('box1')
    // const box2 = db.collection('box-2')
    // const box3 = db.collection('box-3')
    console.log({box1})

    //EJS
    app.set('view engine', 'ejs')

    //Body Parser
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    

    //Handlers
    app.get('/', (req, res) => {
      res.render('index.ejs', {})
    })

    app.post('/boxes/:id', (req, res) => {
      const id = +req.params.id
      const collection = `box${id}`
      console.log({id, collection})
      box1.insertOne(req.body)
        .then(result => {
          res.redirect('/')
          console.log(result)
        })
        .catch(error => console.log(error))
    })


    app.listen(PORT, _ => console.log(`Listening on ${PORT}`))
  })