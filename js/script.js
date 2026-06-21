// Simulasi status login
let isLoggedIn = false; // ubah ke true setelah login berhasil

// Klik gambar/title/desc → tampilkan detail lengkap
document.querySelectorAll(".course-img, .course-title, .course-desc").forEach(el => {
  el.addEventListener("click", () => {
    alert("Detail Course:\n- Materi: Audit & Financial Analysis\n- Instruktur: Jenna Ortega\n- Durasi: 12 jam\n- Sertifikat: Tersedia");
  });
});

// Klik harga → cek login
document.querySelectorAll(".course-price").forEach(priceEl => {
  priceEl.addEventListener("click", () => {
    if (isLoggedIn) {
      alert("Pilih metode pembayaran:\n1. Transfer Bank\n2. E-Wallet\n3. Kartu Kredit");
    } else {
      window.location.href = "login.html";
    }
  });
});
