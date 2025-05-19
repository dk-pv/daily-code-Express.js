const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded())

app.get("/add-product",(req , res , next) =>{
    res.send('<h1>add product</h1> <form action="/store-product" method="POST"> <input type="text"  name="title"/> <input type="submit" value = "submit" /> </form>')
})
app.post("/store-product",(req , res , next) =>{
    console.log("formData" , req.body)
    res.send("<h1>product sumbitted</h1>")
})
app.listen(5050 , () =>{
    console.log("server is running")
}) 