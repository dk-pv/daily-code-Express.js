const EXPRESS = require("express");
const APP = EXPRESS();

const usersRouter = require('./users.router')

APP.use(EXPRESS.json());


APP.get("/", (request, response) => {
  return response.send("hello world , welcome");
});

APP.use('/user',usersRouter)

APP.listen(3001, () => {
  console.log("server is running");
});
