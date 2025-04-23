// === TANDAI MENU NAVBAR YANG AKTIF ===
document.addEventListener("DOMContentLoaded", () => {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll(".nav-link");
  
    menuItems.forEach(link => {
      if (link.href === currentLocation) {
        link.classList.add("active");
      }
    });
  });
  
  // === SMOOTH SCROLL UNTUK ANCHOR LINK (#id) ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // === SCROLL KE ATAS SAAT RELOAD ===
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  // === (OPSIONAL) TOMBOL SCROLL TO TOP ===
  const scrollBtn = document.createElement("button");
  scrollBtn.innerText = "↑";
  scrollBtn.id = "scrollToTopBtn";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "20px";
  scrollBtn.style.right = "20px";
  scrollBtn.style.display = "none";
  scrollBtn.style.padding = "10px 15px";
  scrollBtn.style.fontSize = "18px";
  scrollBtn.style.border = "none";
  scrollBtn.style.borderRadius = "5px";
  scrollBtn.style.backgroundColor = "#007bff";
  scrollBtn.style.color = "white";
  scrollBtn.style.cursor = "pointer";
  document.body.appendChild(scrollBtn);
  
  // Tampilkan tombol saat scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  
  // Klik tombol -> scroll ke atas
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });