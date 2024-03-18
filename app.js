const express = require("express");
const parser = require("body-parser");
const path = require("path");
const signuproute = require("./routes/signup");
const sequelize = require("./util/database");
const app = express();

app.use(parser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(signuproute);

sequelize
  .sync()
  .then(() => {
    app.listen(5500);
  })
  .catch((err) => {
    console.log(err);
  });
