const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.post('/', (req, res) => {
  console.log(req.body);
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
