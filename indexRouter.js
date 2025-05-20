const express = require('express')
const router = express.Router()
const{ getAllUsers ,getEchUser , addUser ,updateUser,removeUser} = require('./indexController')

router.get('/',getAllUsers)
router.get('/:id',getEchUser)
router.post('/add',addUser)
router.delete('/:id',updateUser)
router.patch('/update/:id',removeUser)
module.exports = router