const express = require("express");

const route = express.Router();

const logincontroller = require("../controller/login");

route.get("/login", logincontroller.loginpage);

module.exports = route;
