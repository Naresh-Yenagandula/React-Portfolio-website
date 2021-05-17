const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

//import routes
const route = require("./routes/route")

// middlewares
app.use(cors())
app.use(express.json())

//load environment varibles
dotenv.config()

//middleware routes
app.use('/api',route)

app.get('/',(req,res)=>{
    res.send("Welcome to Codex Portfolio Server")
})

app.listen(process.env.PORT || 8081 ,()=>{console.log("Server is UP")})

