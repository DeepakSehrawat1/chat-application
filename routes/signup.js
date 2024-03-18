const express = require("express");

const route = express.Router();

const signupcontroller = require("../controller/signup");

route.get("/signup", signupcontroller.signuppage);

route.post("/user/signup", signupcontroller.addelement);

module.exports = route;
