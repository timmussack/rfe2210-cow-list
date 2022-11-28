const express = require('express');
const path = require('path');
const db = require('../database/index.js')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/cows', (req, res) => {
  console.log('Get from client', req.body)
  db.retrieve();
  res.json('Hello from the server');
})

// Your Database Queries Here!!
// var save = (name, des, id, callback) => {
//   console.log('Saved in the db.')
//   let query = 'INSERT into cow VALUES (?, ?, ?)'
//   let values = [name, des, id]
//   connection.query(query, values, (err, rows) => {
//     callback(err, rows);
//   })
// };

app.post('/cows', (req, res) => {
  console.log('Post from client', req.body);
  db.save(req.body.name, req.body.description, (err, rows) => {
    if(err) {
      console.log('Error in db.save callback', err)
      res.json(err)
    } else {
      res.json(rows)
    }
  });
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
