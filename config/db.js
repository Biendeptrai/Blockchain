const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",       // XAMPP mặc định KHÔNG có mật khẩu
  database: "linhkien"
});

db.connect(err => {
  if (err) {
    console.log("❌ Không kết nối được MySQL");
    console.log(err.message);
    return;
  }
  console.log("✅ Kết nối MySQL thành công");
});

module.exports = db;
