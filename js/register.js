document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Konfirmasi kata sandi tidak sesuai!");
      return;
    }

    if (fullname && email && phone && password) {
      alert("Pendaftaran berhasil! Silakan login.");
      window.location.href = "login.html";
    } else {
      alert("Semua field wajib diisi!");
    }
  });
});
