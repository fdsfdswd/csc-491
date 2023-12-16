const express = require('express');
const app = express();
const port = 3000;
const myBlockchain = require('./blockchain'); // Adjust the path as needed

app.get('/blockchain', (req, res) => {
  res.json(myBlockchain);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
