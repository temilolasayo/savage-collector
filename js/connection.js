var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testsss",
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =
        "INSERT INTO savageusers (name, email, password) VALUES ('Alajiki Temilola', 'alajikitemilola@gmail.com', 'p@ssword')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
