document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      // Simulasi login berhasil
      alert("Login berhasil! Selamat datang di Videobelajar.");
      // Set status login global
      localStorage.setItem("isLoggedIn", "true");
      // Redirect ke beranda
      window.location.href = "index.html";
    } else {
      alert("Email dan password wajib diisi!");
    }
  });
});
