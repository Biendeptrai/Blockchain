let products = [];
let currentCategory = "ALL";

// ===== LOAD SẢN PHẨM =====
fetch("http://localhost:3000/api/products")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
  });

function renderProducts(listData) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  if (listData.length === 0) {
    list.innerHTML = "<p>❌ Không có sản phẩm</p>";
    return;
  }

  listData.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <a href="product.html?id=${p.id}">
          <img src="${p.image}">
          <h3>${p.name}</h3>
        </a>
        <p>${p.price.toLocaleString()} VNĐ</p>
        <button onclick="addToCart(${p.id}, '${p.name}', ${p.price}, '${p.image}')">
          Thêm giỏ hàng
        </button>
      </div>
    `;
  });
}

// ===== LỌC DANH MỤC =====
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    currentCategory = link.dataset.category;
    applyFilters();
  });
});

// ===== TÌM KIẾM =====
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", applyFilters);

function applyFilters() {
  const keyword = searchInput.value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  if (currentCategory !== "ALL") {
    filtered = filtered.filter(p =>
      p.category.toUpperCase().includes(currentCategory.toUpperCase())
    );
  }
  renderProducts(filtered);
}

// ===== GIỎ HÀNG =====
function addToCart(id, name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const idx = cart.findIndex(i => i.id === id);
  if (idx !== -1) cart[idx].quantity += 1;
  else cart.push({ id, name, price, image, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("✅ Đã thêm vào giỏ hàng");
}

// ===== ICON SỐ LƯỢNG =====
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalQty = cart.reduce((s, i) => s + i.quantity, 0);
  const el = document.getElementById("cart-count");
  if (el) el.innerText = totalQty;
}
updateCartCount();
function renderUserHeader() {
  const userArea = document.getElementById("user-area");
  if (!userArea) return;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    userArea.innerHTML = `
      <span class="user-name">Xin chào, ${user.username}</span>
      <a href="orders.html" class="orders-btn">📦 Đơn hàng của tôi</a>
      <span class="logout-btn" onclick="logout()">Đăng xuất</span>
    `;
  } else {
    userArea.innerHTML = `
      <a href="login.html" class="auth-link">Đăng nhập</a>
      <a href="register.html" class="auth-link">Đăng ký</a>
    `;
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

renderUserHeader();

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

// GỌI KHI LOAD TRANG
renderUserHeader();
