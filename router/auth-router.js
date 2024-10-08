const express = require("express");
const router = express.Router();
const {
  home,
  register,
  login,
  user,
} = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupSchema, loginSchema } = require("../validator/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/", home);
router.post("/register", validate(signupSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/user", authMiddleware, user);

module.exports = router;
