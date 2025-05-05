const mysql = require('mysql2/promise'); // Use promise-based API

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '4794',
    database: 'demo',
    port: 3306
});

// Export the pool
module.exports = { pool };
