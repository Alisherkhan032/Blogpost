const User = require('../models/user');

function user_signup(req, res) {
  // 1. Extract the name, email and password from the request body
  const obj = req.body;
  console.log(obj);
  // 2. Create a new user in the database
  const user = new User(obj); //* or directly use User.create(obj)
  user.save()
    .then((user) => {
      console.log("User created successfully");
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`Error creating user: ${err}`);
    });
  // 2a. If user is created successfully, create a token,
  // // send it back as cookie, and redirect to all blogs page /blogs
  // 2b. If user creation fails, send an error message with status code 400 (Bad Request)
  // res.send("Signup route POST");
}

function user_login(req, res) {
  // 1. Extract the email and password from the request body
  const { email, password } = req.body;
  // 2. Search for the user in the database
  User.findOne({ email })
    .then((result) => {
      if (result.password === password) {
        res.redirect("/blogs");
        // res.send('User found and password is correct');
      } else {
        res.status(400).send("Incorrect password");
      }
    })
    .catch((err) => {
      res.status(400).send(`Error logging in: ${err}`);
    });
  // 2a. If user is found and password is correct, create a token,
  // // send it back as cookie, and redirect to all blogs page /blogs
  // 2b. If user is not found or password is incorrect, send an error message with status code 400 (Bad Request)
  // res.send('Login route POST');
}

module.exports = { user_signup, user_login };
