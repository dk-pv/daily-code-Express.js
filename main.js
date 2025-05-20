const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const adminRouter = require('./Troutes/admin')
const shopRoutes = require('./Troutes/shop')
const path = require('path')
app.use(express.static(path.join(__dirname,'public')))

app.use( '/admin',adminRouter)
app.use(shopRoutes)
app.use((req , res , next) =>{
    res.status(404).sendFile(path.join(__dirname , "Tviews" ,"404.html"))
})
app.use(bodyParser.urlencoded())


app.listen(5050 , () =>{
    console.log("server is running")
}) 