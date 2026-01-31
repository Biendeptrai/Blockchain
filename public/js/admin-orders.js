const user = JSON.parse(localStorage.getItem("user"));
if (!user || user.role !== "admin") {
  alert("⛔ Không có quyền truy cập");
  window.location.href = "login.html";
}

fetch("http://localhost:3000/api/orders")
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById("orders");
    data.forEach(o => {
      div.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px">
          <p><b>Đơn #${o.id}</b></p>
          <p>Khách: ${o.customer_name}</p>
          <p>SĐT: ${o.phone}</p>
          <p>Tổng: ${o.total.toLocaleString()} VNĐ</p>
          <button onclick="viewDetail(${o.id})">Xem chi tiết</button>
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
          `${i.product_name} x${i.quantity}`
        ).join("\n")
      );
    });
}
