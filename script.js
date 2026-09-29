const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const text = `Hello Guru Deepthi, I am ${data.get("name")}. I am interested in ${data.get("class")} classes. My phone number is ${data.get("phone")}. ${data.get("message") || ""}`;
  const url = `https://wa.me/917382661999?text=${encodeURIComponent(text)}`;
  document.getElementById("formMessage").textContent = "Opening WhatsApp…";
  window.open(url, "_blank");
});
