const express = require("express")
const bodyParser = require("body-parser")
const memberRoute = require("./routes/member")
let app = express()

app.use(bodyParser.json())
app.use("/api/member", memberRoute)

app.listen(3000)