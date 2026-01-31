const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "linhkien"
});

db.connect(err => {
  if (err) throw err;
  console.log("Kết nối MySQL thành công");
});

module.exports = db;
