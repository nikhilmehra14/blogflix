const { Router } = require("express");
const { signUp, logIn } = require("../controllers/user");
const router = Router();

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/logout", (req, res) => {
  return res.clearCookie("token").redirect("/");
});

router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
