const path = require("path");
const User = require("../Model/users.js");
const bcrypt = require("bcrypt");

exports.signuppage = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "signup.html"));
};

exports.addelement = (req, res) => {
  const { name, email, phno, password } = req.body;
  console.log("hello");
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    User.create({
      Name: name,
      email: email,
      phone: phno,
      password: hash,
    })
      .then((responce) => {
        res.status(201).json(responce);
      })
      .catch((err) => {
        console.log("in");
        res.status(500).send(err);
        console.log(err);
      });
  });
};
