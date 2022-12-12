const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webcrud'
});

connection.connect((err) => {
    if (!!err) {
        console.log(err);
    } else {
        console.log('Koneksi ke MySQL berhasil');
    }
})

module.exports = connection;