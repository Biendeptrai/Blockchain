# Blockchain
<<<<<<< HEAD
# 🖥️ PC STORE – Website bán linh kiện máy tính

PC STORE là website bán linh kiện máy tính được xây dựng nhằm phục vụ mục đích học tập và làm đồ án môn học.  
Website cho phép người dùng xem sản phẩm, thêm vào giỏ hàng, đặt hàng, xem lịch sử đơn hàng và quản lý tài khoản.

---

## 🚀 Công nghệ sử dụng

- **Frontend**:  
  - HTML5  
  - CSS3  
  - JavaScript (Vanilla JS)

- **Backend**:  
  - Node.js  
  - Express.js

- **Database**:  
  - MySQL (qua XAMPP)

- **Khác**:  
  - Fetch API  
  - LocalStorage (lưu giỏ hàng, trạng thái đăng nhập)

---

## 📌 Các chức năng chính

### 👤 Người dùng (User)
- Đăng ký / Đăng nhập
- Xem danh sách sản phẩm theo danh mục (CPU, RAM, SSD, VGA, Mainboard,…)
- Tìm kiếm sản phẩm
- Thêm sản phẩm vào giỏ hàng
- Quản lý giỏ hàng (tăng/giảm số lượng, xoá)
- Thanh toán và đặt hàng
- Xem lịch sử đơn hàng
- Xem chi tiết từng đơn hàng đã đặt
- Đăng xuất

### 🛠️ Quản trị (Admin – mở rộng)
- Xem danh sách đơn hàng
- Xem chi tiết đơn hàng của người dùng

---

## 🗂️ Cấu trúc thư mục

```bash
web-linh-kien/
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   ├── orders.js
│   │   └── order-detail.js
│   ├── images/
│   ├── index.html
│   ├── cart.html
│   ├── checkout.html
│   ├── orders.html
│   ├── order-detail.html
│   ├── login.html
│   └── register.html
│
├── routes/
│   ├── product.routes.js
│   ├── order.routes.js
│   └── auth.routes.js
│
├── config/
│   └── db.js
│
├── server.js
├── package.json
└── README.md

⚙️ Hướng dẫn cài đặt & chạy website
1️⃣ Yêu cầu môi trường

Node.js (v16 trở lên)

XAMPP (MySQL)

Trình duyệt web (Chrome, Edge,…)

Cài đặt Database


2️⃣Mở XAMPP → Start Apache và MySQL
Truy cập phpMyAdmin
Tạo database mới, ví dụ:
CREATE DATABASE linhkien;
Import các bảng (users, products, orders, order_items) vào database

3️⃣ Cấu hình kết nối MySQL

📁 config/db.js

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


4️⃣ Cài đặt thư viện NodeJS
Mở terminal tại thư mục project:
npm install

5️⃣ Chạy server
npx nodemon server.js

6️⃣ Truy cập website
Mở trình duyệt và truy cập:
http://localhost:3000/index.html

Tk người dùng
Username: user01
Password: 123

Tk Admin
Username: admin
Password: 123456
=======
# Blockchain
>>>>>>> bd71931bd4f358d6c3e9a98df7853252e024e6e0
