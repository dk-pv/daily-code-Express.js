
const logger= (req , res , next ) =>{
    console.log("requist received" , req.url)
    next()
}
module.exports = logger