// const express = require('express')

// const app = express()

// app.use(express.json())

// app.get('/' , (req , res) =>{
//     res.send('GET')
// })
// app.post('/' , (req , res) =>{
//     console.log(req.body)
//     res.send('POST')
// })
// app.put('/' , (req , res) =>{
//     res.send('PUT')
// })
// app.patch('/' , (req , res) =>{
//     res.send('PATCH')
// })
// app.delete('/' , (req , res) =>{
//     res.send('DELETE')
// })
// app.listen(5005 , () =>{
//     console.log("it,s ready")
// })




const EXPRESS = require('express')
const APP = EXPRESS()

APP.use(EXPRESS.json())

var users = [];
  
APP.get('/' , (request , response) =>{
    return response.send("hello world")
})
APP.get('/user' ,(req , res) =>{
    return res.json(users)
})
APP.get('/user/:id' ,(req , res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send() 
    }
    return res.json(user)
})
APP.post('/user' ,(req , res) =>{
    const {name , email} = req.body;
    const user = {id: users.length + 1 , name : name , email :email}
    users.push(user)
    return res.status(201).json(user) 
})
APP.delete('/user/:id' ,(req , res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send() 
    }
    users = users.filter((user) => user.id != id)
    return res.status(204).send()
})
APP.patch('/user/:id', (req ,res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send()
    }
    const {name , email} = req.body
    if(name){
        user.name = name;
    }
    if(email){
        user.email = email
    }
    const index = users.findIndex((user) =>  user.id == id)
    users[index] = user
    return res.json(user)
})
APP.listen(3001 , () =>{
    console.log('server is running')
})