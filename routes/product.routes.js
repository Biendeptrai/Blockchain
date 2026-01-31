const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Lấy tất cả sản phẩm
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// Lấy sản phẩm theo ID (FULL CHI TIẾT)
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM products WHERE id = ?",
    [id],
    (err, result) => {
      if (err) return res.json(err);
      res.json(result[0]);
    }
  );
});

module.exports = router;
