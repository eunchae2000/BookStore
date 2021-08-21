const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: '01090442332',
    port: 3306,
    database: 'bookStoreDB'
})

module.exports = pool;