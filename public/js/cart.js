let cart = JSON.parse(localStorage.getItem("cart")) || [];
const list = document.getElementById("cart-list");
const totalEl = document.getElementById("total");

function renderCart() {
  list.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    list.innerHTML = "<p>Giỏ hàng trống</p>";
    totalEl.innerText = "";
    return;
  }

cart.forEach((item, index) => {
  total += item.price * item.quantity;

  cartList.innerHTML += `
    <div class="cart-item">
      <img src="${item.image}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <div class="cart-price">${item.price.toLocaleString()} VNĐ</div>

        <div class="cart-qty">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">❌ Xoá</button>
      </div>
    </div>
  `;
});

  totalEl.innerText = "Tổng tiền: " + total.toLocaleString() + " VNĐ";
}

function changeQty(i, v) {
  cart[i].quantity += v;
  if (cart[i].quantity <= 0) cart.splice(i, 1);
  save();
}
function removeItem(i) {
  cart.splice(i, 1);
  save();
}
function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
renderCart();
