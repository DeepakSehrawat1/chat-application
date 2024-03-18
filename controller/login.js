const path = require("path");

exports.loginpage = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
};
