const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ĐĂNG KÝ
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    err => {
      if (err) return res.json({ error: "Tài khoản đã tồn tại" });
      res.json({ success: true });
    }
  );
});

// ĐĂNG NHẬP
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username, password],
    (err, result) => {
      if (err || result.length === 0)
        return res.json({ error: "Sai tài khoản hoặc mật khẩu" });

      res.json({
        id: result[0].id,
        username: result[0].username,
        role: result[0].role
      });
    }
  );
});

module.exports = router;
