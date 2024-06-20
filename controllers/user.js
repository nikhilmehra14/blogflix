const User = require("../models/user");

async function signUp(req, res) {
  const { fullName, email, password } = req.body;

  try {
    await User.create({
      fullName,
      email,
      password,
    });

    return res.redirect("/user/login");
  } catch (error) {
    if (error.code === 11000) {
      return res.render("signup", { error: "Email already exists." });
    }
    return res.status(500).send("Internal Server Error");
  }
}

async function logIn(req, res) {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("login", {
      error: "Incorrect Email or Password.",
    });
  }
}

module.exports = {
  signUp,
  logIn,
};
