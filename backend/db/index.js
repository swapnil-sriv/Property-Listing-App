const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

module.exports = {
  query: (sql, params) => {
    return new Promise((resolve, reject) => {
      connection.execute(sql, params, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
};
