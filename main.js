const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const adminRouter = require('./Troutes/admin')
const shoRoutes = require('./Troutes/shop')

app.use( '/admin',adminRouter)
app.use(shoRoutes)
app.use((req , res , next) =>{
    res.status(404).send('<h1>404 page not found</h1>')
})

app.use(bodyParser.urlencoded())


app.listen(5050 , () =>{
    console.log("server is running")
}) 