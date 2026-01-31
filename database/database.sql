CREATE DATABASE linhkien;
USE linhkien;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price INT,
  image VARCHAR(255),
  category VARCHAR(100)
);

INSERT INTO products (name, price, image, category)
VALUES
('RAM DDR4 16GB', 1200000, '/images/ram.jpg', 'RAM'),
('SSD 512GB', 1500000, '/images/ssd.jpg', 'SSD');
