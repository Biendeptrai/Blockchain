const mysql = require("mysql");

console.log("🔄 Đang kết nối MySQL...");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "linhkien",
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error("❌ Không kết nối được MySQL");
    console.error(err.message);
    return;
  }
  console.log("✅ Kết nối MySQL thành công");
});

module.exports = db;
