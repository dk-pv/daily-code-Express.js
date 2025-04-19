const EXPRESS = require('express')
const app =  EXPRESS()
app.get('/' , (req , res) =>{
    res.send("helloo world")
}).listen(5000)
