const mysql = require("mysql2");

const db_connection = mysql

    .createConnection({
        host: "localhost", // имя хоста
        user: "root", // имя пользователя
        database: "PE-11b_Mamatkulov", // имя базы данных
        password: "root", // пароль от базы данных
    })

    .on("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection;