const express = require("express");
const jwt = require('jsonwebtoken')
const app = express();
app.use(express.json())
const users = [
  {
    id: "u001",
    name: "Rahul Krishna",
    email: "rahul.krishna@example.com",
    password: "Rahul@123",
  }
];
app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", (req, res) => {
  const {email , password} = req.body;
  console.log(req.body)
    const user = users.find( (user) => user.email === email && user.password === password)
    if(!user){
        return res.send(401).json({message : "inavalid username or password"})
    }
    const token = jwt.sign({id : user.id} , "topsecret")
    return res.json({message : 'login success' , token})
});

app.get('/profile' , (req , res) =>{
    res.send('this is your profile')
})

app.listen(8888, () => {
  console.log("server is running");
});
