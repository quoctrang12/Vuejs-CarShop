const express = require("express");
const users = require("../controllers/user.controller");

const router = express.Router();

router
  .route("/signup")
  .post(users.create);
router
  .route("/login")
  .post(users.login)

module.exports = router;
