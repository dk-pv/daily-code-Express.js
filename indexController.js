const express = require('express')

var users = [];


const getAllUsers = (req , res) =>{
    return res.json(users)
}
const getEchUser = (req , res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send()
    }
    return res.json(user)
}
const addUser = (req , res) =>{
    const {name,email} = req.body;
    const newUser = { id : users.length + 1 , name , email}
    users.push(newUser)
    console.log(newUser)
    return res.status(201).json(newUser)
}
const removeUser =(req , res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send()
    }
    users = users.filter((user) => user.id != id)
    return res.status(204).send()
}
const updateUser = (req , res) =>{
    const {id} = req.params
    const user = users.find((user) => user.id == id)
    if(!user){
        return res.status(404).send()
    }
    const {name , email} = req.body
    if(name){
        user.name = name
    }
    if(email){
        user.email = email
    }
    const index = users.findIndex((user) => user.id == id)
    users[index] = user
    return res.json(user)
}
module.exports = {
    getAllUsers ,getEchUser , addUser ,updateUser,removeUser
}