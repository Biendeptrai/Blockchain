const express = require("express");
const router = express.Router();
const db = require("../config/db");

// LƯU ĐƠN HÀNG
router.post("/", (req, res) => {
  const { name, phone, address, items, total, username } = req.body;

  const orderSql =
  "INSERT INTO orders (customer_name, phone, address, total, username) VALUES (?, ?, ?, ?, ?)";

  db.query(orderSql, [name, phone, address, total, username], (err, result) => {
    if (err) return res.json(err);

    const orderId = result.insertId;

    const itemSql =
      "INSERT INTO order_items (order_id, product_name, price, quantity) VALUES ?";

    const values = items.map(i => [
      orderId,
      i.name,
      i.price,
      i.quantity
    ]);

    db.query(itemSql, [values], err2 => {
      if (err2) return res.json(err2);
      res.json({ success: true });
    });
  });
});

// ADMIN: LẤY DANH SÁCH ĐƠN
router.get("/", (req, res) => {
  db.query("SELECT * FROM orders ORDER BY created_at DESC", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// ADMIN: CHI TIẾT ĐƠN
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM order_items WHERE order_id = ?",
    [id],
    (err, result) => {
      if (err) return res.json(err);
      res.json(result);
    }
  );
});

module.exports = router;
// USER: LẤY ĐƠN CỦA CHÍNH MÌNH
router.get("/user/:username", (req, res) => {
  const username = req.params.username;

  db.query(
    "SELECT * FROM orders WHERE username = ? ORDER BY created_at DESC",
    [username],
    (err, result) => {
      if (err) return res.json(err);
      res.json(result);
    }
  );
});