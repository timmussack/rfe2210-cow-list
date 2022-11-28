const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log('mysql connection error', err);
  } else {
    console.log('Connected to MySQL!')
  }
});

connection.query(
  "CREATE TABLE if not exists cow (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(25), description VARCHAR(256))", (err) => {
    if (err) {
      console.log('mysql create table error', err)
    } else {
      console.log('cow table was created')
    }
  })

// Your Database Queries Here!!
var save = (id, name, des, callback) => {
  console.log('Saved in the db.')
  let query = 'INSERT into cow VALUES (?, ?, ?)'
  let values = [id, name, des]
  connection.query(query, values, (err, rows) => {
    callback(err, rows);
  })
};

var retrieve = () => {
  console.log('I will get all the cows.')
};




// Don't forget to export your functions!
module.exports = {
  save: save,
  retrieve: retrieve
};

// module.exports = db;
