const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')


function rockPaperScissors(pChoice){
  const rps = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
  }
  const ruleset = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock'
  }
  const machineNum = Math.ceil(Math.random()*3)
  const machineChoice = rps[machineNum]
  if (pChoice === machineChoice) return `DRAW! Both of you picked ${pChoice}`
  if (ruleset[pChoice] === machineChoice) return `LOSE! Your ${pChoice} lost to the machine's ${machineChoice}!`
  else return `WIN! Your ${pChoice} beat the machine's ${machineChoice}!`
}

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params)

  if (page === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if('playerchoice' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = rockPaperScissors(params['playerchoice'])
        console.log(objToJson)
        res.end(JSON.stringify(objToJson));
    }
  }

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);

