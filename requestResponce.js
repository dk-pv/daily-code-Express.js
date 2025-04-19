                        //request object

const express = require('express')
const app = express()
app.get('/' ,(req , res) =>{
    console.log('Req',req.app)
    res.send("hy good morning")
}).listen(5005 , () =>{
    console.log("server is working")
})