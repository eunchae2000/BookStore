const mysql = require('mysql2/promise')

const pool = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '01090442332',
    port: 3306,
    database: 'bookStoreDB'
})

module.exports = pool;