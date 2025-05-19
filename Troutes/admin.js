const express = require('express')
const router = express.Router()
const path = require('path')


router.get("/add-product",(req , res , next) =>{
    res.sendFile(path.join(__dirname , '../' , 'Tviews' , 'add-product.html'))
})
router.post("/store-product",(req , res , next) =>{
    console.log("formData" , req.body)
    res.send("<h1>product sumbitted</h1>")
})

module.exports = router