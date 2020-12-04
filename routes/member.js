const express = require("express")
const router = express.Router()
const mysqlConnection = require("../connection")

router.get("/", (request, response) => {
    mysqlConnection.query("SELECT * FROM member", (error, rows, fields) => {
        if(!error){
            response.send(rows)
        }
        else {
            console.log("there is an error")
        }
    })
})

router.get("/:id", (request, response) => {
    mysqlConnection.query(`SELECT * FROM member WHERE id = ${request.params.id}`, (error, rows, fields) => {
        if(!error){
            response.send(rows)
        }
        else {
            console.log("there is an error")
        }
    })
})
router.post("/", (request, response) => {
    let newMember = request.body
    let query = `INSERT INTO member VALUES (${newMember.id},'${newMember.name}',${newMember.age})`
    console.log(query)
    mysqlConnection.query(query, (error, rows, fields) => {
        if(!error){
            response.send(rows)
        }
        else {
            console.log(error)
        }
    })

})

module.exports = router