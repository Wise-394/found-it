const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const register = require("./modules/register");
const login = require("./modules/login");
app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const success = await register(pool, username, password);

    if (success) {
      res.json({ success: true, message: "User registered successfully" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const success = await login(pool, username, password);

    if (success) {
      res.json({ success: true, message: "successfully logged in" });
    } else {
      res
        .status(400)
        .json({ success: false, message: "invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("listening");
});
