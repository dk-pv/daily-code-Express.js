const express = require('express')
const usersRoutes = require('./indexRouter')
const app = express()

app.use(express.json())

app.use('/users' , usersRoutes)

app.listen(5555 , () => {
    console.log("server is running")
})

