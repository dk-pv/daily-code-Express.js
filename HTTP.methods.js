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

const users = [
    { id: 1, name: "Danish", email: "alex@gmail.com" },
    { id: 2, name: "Amina", email: "amina@example.com" },
    { id: 3, name: "Rahul", email: "rahul@example.com" },
    { id: 4, name: "Sneha", email: "sneha@example.com" },
    { id: 5, name: "John", email: "john@example.com" }
  ];
  

APP.get('/' , (request , response) =>{
    return response.send("hello world")
})
APP.get('/user' ,(req , res) =>{
    return res.json(users)
})
APP.get('/user/:id' ,(req , res) =>{
    const {id} = req.params
    return res.json(users.find((user) => user.id == id))
})


APP.listen(3001 , () =>{
    console.log('server is running')
})