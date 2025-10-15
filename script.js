// Scroll Spy untuk navbar
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".navbar ul li a");

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document
          .querySelector(".navbar ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

// Tombol hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Tambah efek klik pada link sosial
document.querySelectorAll("footer .social").forEach(link => {
  link.addEventListener("click", (e) => {
    alert("Anda akan diarahkan ke: " + link.textContent);
  });
});

// Tombol kembali ke atas
let toTop = document.createElement("button");
toTop.innerText = "↑ Top";
toTop.id = "toTopBtn";
document.body.appendChild(toTop);

toTop.style.position = "fixed";
toTop.style.bottom = "20px";
toTop.style.right = "20px";
toTop.style.padding = "10px 15px";
toTop.style.fontSize = "18px";
toTop.style.display = "none";
toTop.style.background = "#427D9D";
toTop.style.color = "white";
toTop.style.border = "none";
toTop.style.borderRadius = "8px";
toTop.style.cursor = "pointer";

// Tampilkan tombol saat scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

// Klik tombol kembali ke atas
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});