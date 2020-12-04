const mysql = require("mysql")
let mysqlConnection = mysql.createConnection({
    host : "remotemysql.com",
    user : "5hpkc3Flch",
    password : "1PWNqeVtnZ",
    database : "5hpkc3Flch",
    multipleStatement : true
})

mysqlConnection.connect((error)=>{
    if (!error){
        console.log("Connect dc roi`, ahihihi :v")
    }
    else {
        console.log("Deo connect dc :v")
    }
})

module.exports = mysqlConnection