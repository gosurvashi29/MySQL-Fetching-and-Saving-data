const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sharpener',
    password: 'admin1234'
});

module.exports = pool.promise();