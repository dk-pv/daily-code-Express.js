var users = [];


const getUsers = (req , res) =>{
    return res.json(users)
}
const getUser = (req , res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send() 
    }
    return res.json(user)
}
const createUser = (req , res) =>{
    const {name , email} = req.body;
    const user = {id: users.length + 1 , name : name , email :email}
    users.push(user)
    return res.status(201).json(user) 
} 

const deleteUser =(req , res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send() 
    }
    users = users.filter((user) => user.id != id)
    return res.status(204).send()
}

const updateUser =  (req ,res) =>{
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
}

module.exports = {getUser , getUsers , createUser , deleteUser , updateUser}