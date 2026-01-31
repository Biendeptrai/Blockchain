document.getElementById("register-form").addEventListener("submit", e => {
  e.preventDefault();

  fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) alert(data.error);
      else {
        alert("✅ Đăng ký thành công");
        window.location.href = "login.html";
      }
    });
});
