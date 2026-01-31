const params = new URLSearchParams(window.location.search);
const orderId = params.get("id");

if (!orderId) {
  alert("Không tìm thấy đơn hàng");
  window.location.href = "orders.html";
}

fetch(`http://localhost:3000/api/orders/${orderId}`)
  .then(res => res.json())
  .then(items => {
    const infoBox = document.getElementById("order-info");
    const itemsBox = document.getElementById("order-items");

    let total = 0;

    items.forEach(i => {
      total += i.price * i.quantity;

      itemsBox.innerHTML += `
        <div class="order-item">
          <div class="order-item-name">
            ${i.product_name} <br>
            <small>Số lượng: ${i.quantity}</small>
          </div>
          <div class="order-item-price">
            ${(i.price * i.quantity).toLocaleString()} VNĐ
          </div>
        </div>
      `;
    });

    infoBox.innerHTML = `
      <p><b>Mã đơn:</b> #${orderId}</p>
      <p><b>Tổng tiền:</b> <span style="color:#e53935">${total.toLocaleString()} VNĐ</span></p>
      <p><b>Trạng thái:</b> Đang xử lý</p>
    `;
  });
