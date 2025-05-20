const express = require('express')
const app = express()
const loggerMidleware = require('./loggerMiddleware')


app.use(simpleMiddleware)

app.get('/' ,(req , res) =>{
    return res.send("hello world")
})
app.listen(3699 , () =>{
    console.log("server is running")
})