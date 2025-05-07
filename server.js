const express = require('express');
const https   = require('https');
const fs      = require('fs');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, HTTPS CI/CD world!');
});

const options = {
  key:  fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};
https.createServer(options, app)
  .listen(5443, () => {
    console.log('Listening on https://localhost:5443');
  });