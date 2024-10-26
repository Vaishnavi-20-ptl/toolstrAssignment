const mysql = require('mysql2');
const config = require('config');

const db = mysql.createConnection({
  host: config.get('dbConfig.host'),
  user: config.get('dbConfig.user'),
  password: config.get('dbConfig.password'),
  database: config.get('dbConfig.database')
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db; 