const cart = JSON.parse(localStorage.getItem("cart")) || [];
const user = JSON.parse(localStorage.getItem("user"));
const totalEl = document.getElementById("total");
const itemsEl = document.getElementById("order-items");

let total = 0;

// HIỂN THỊ SẢN PHẨM
cart.forEach(item => {
  const itemTotal = item.price * item.quantity;
  total += itemTotal;

  itemsEl.innerHTML += `
    <div class="order-item">
      <span>${item.name} x${item.quantity}</span>
      <b>${itemTotal.toLocaleString()} VNĐ</b>
    </div>
  `;
});

totalEl.innerText = "Tổng tiền: " + total.toLocaleString() + " VNĐ";

// GỬI ĐƠN HÀNG
document.getElementById("checkout-form").addEventListener("submit", e => {
  e.preventDefault();

  const order = {
  name: document.getElementById("name").value,
  phone: document.getElementById("phone").value,
  address: document.getElementById("address").value,
  items: cart,
  total: total,
  username: user.username   // 🔥 GẮN USER
};

  fetch("http://localhost:3000/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  })
    .then(res => res.json())
    .then(() => {
      alert("🎉 Đặt hàng thành công!");
      localStorage.removeItem("cart");
      window.location.href = "index.html";
    });
});
