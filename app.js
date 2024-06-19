const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const blog = require("./models/blog");

const { checkForAuthenticationCookie } = require("./middlewares/auth");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected Successfully"))
  .catch((error) => console.log(`MongoDB ERROR: ${error}`));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.get("/", async (req, res) => {
  const allBlogs = await blog.find({});
  return res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.listen(PORT, () => console.log(`Server is started at PORT: ${PORT}`));
