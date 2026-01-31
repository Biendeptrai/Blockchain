const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`http://localhost:3000/api/products/${id}`)
  .then(res => res.json())
  .then(p => {
    document.getElementById("product-detail").innerHTML = `
      <div class="product-detail">
        <img src="${p.image}">
        <div class="info">
          <h2>${p.name}</h2>
          <p class="price">${p.price.toLocaleString()} VNĐ</p>

          <h3>Mô tả sản phẩm</h3>
          <p>${p.description || 'Chưa có mô tả'}</p>

          <h3>Thông số kỹ thuật</h3>
          <pre class="specs">${p.specs || 'Chưa có thông số'}</pre>
        </div>
      </div>
    `;
  });
