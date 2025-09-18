import express from "express";
import cors from "cors";
import pool from "./db.js";
import session from "express-session";
import register from "./modules/register.js";
import login from "./modules/login.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await register(pool, username, password);

    if (result.success) {
      res.json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await login(pool, username, password);

    if (result.success) {
      req.session.user = { username };
      res.json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.get("/auth/check", (req, res) => {
  if (req.session.user) {
    return res.json({ loggedIn: true, user: req.session.user });
  }
  res.json({ loggedIn: false });
});

app.get("/home", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: "Not logged in" });
  }

  res.json({ message: `Hello, ${req.session.user.username}` });
});

app.post("/logout", (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

app.listen(5000, () => {
  console.log("listening");
});
