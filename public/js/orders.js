const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  alert("Vui lòng đăng nhập để xem đơn hàng");
  window.location.href = "login.html";
}

fetch(`http://localhost:3000/api/orders/user/${user.username}`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("order-list");

    if (data.length === 0) {
      list.innerHTML = "<p>Bạn chưa có đơn hàng nào</p>";
      return;
    }

    data.forEach(o => {
      list.innerHTML += `
        <div class="order-card">
          <div class="order-header">
            <div class="order-id">Đơn #${o.id}</div>
            <div class="order-status">Đang xử lý</div>
          </div>

          <div class="order-info">
            <p>📅 Ngày đặt: ${new Date(o.created_at).toLocaleString()}</p>
            <p class="order-total">💰 Tổng tiền: ${o.total.toLocaleString()} VNĐ</p>
          </div>

          <div class="order-actions">
           <a href="order-detail.html?id=${o.id}" class="detail-btn">Xem chi tiết</a>
          </div>
        </div>
      `;
    });
  });

function viewDetail(id) {
  fetch(`http://localhost:3000/api/orders/${id}`)
    .then(res => res.json())
    .then(items => {
      alert(
        items.map(i =>
          `${i.product_name} x${i.quantity} (${i.price.toLocaleString()} VNĐ)`
        ).join("\n")
      );
    });
}
