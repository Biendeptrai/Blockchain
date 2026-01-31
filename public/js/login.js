document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();

  fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error);
      } else {
        localStorage.setItem("user", JSON.stringify(user));

        if (user.role === "admin") {
          window.location.href = "admin-orders.html";
        } else {
          window.location.href = "index.html";
        }
      }
    });
});
