const EXPRESS = require('express')
const app =  EXPRESS()
const path = require('path')

app.use(EXPRESS.json())

app.get('/' , (req , res) =>{
    return res.status(201).send("this is from server")
})
app.post('/' , (req, res) =>{
    console.log(req.body)
    return res.send("post")
})
app.get('/users' , (req , res) =>{
    res.sendFile(path.join(__dirname , "Tviews" , "users.html"))  
})
app.listen(5000,() =>{
    console.log(`server is running port 5000`)
})
