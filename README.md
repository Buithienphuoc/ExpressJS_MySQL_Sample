# ExpressJS_MySQL_Sample

First, set up and connect MySQL Database:
1) Install MySQL
2) Using IntelliJ to connect to your database
3) in connection.js line 2, please change this to your database username and password:
   
let mysqlConnection = mysql.createConnection({
    host : "remotemysql.com",  
    user : "5hpkc3Flch",
    password : "1PWNqeVtnZ",
    database : "5hpkc3Flch",
    multipleStatement : true
})

Now, start the app:
1) To run this project, you must install nodejs --> npm install
2) Install nodemon: npm install -g nodemon
3) or npm install --save-dev nodemon
4) Run: nodemon server.js
6) enjoy your work ahihihi

After starting, test API using Postman or Insomnia (my recommendation) or install:
1) Go to routes folder, member.js
2) Here, in member.js, you can see every restful API endpoint.
