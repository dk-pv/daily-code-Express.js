const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination : './uploads',
    filename : (req , file , cb) =>cb ( null ,file.originalname)
})
const uploader = multer({storage})
app.post('/upload' , uploader.single("image") ,(req , res) =>{
    res.send('Done ||')
})
app.listen(3001 , () =>{
    console.log('server is running')
}) 