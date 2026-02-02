const toggleBtn = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");
const savedTheme = localStorage.getItem("theme");
const modal = document.createElement("div");

if (savedTheme) {
  document.body.classList.toggle("dark", savedTheme === "dark");
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });

  updateIcon();
}

function updateIcon() {
  if (!toggleBtn) return;
  toggleBtn.innerHTML = document.body.classList.contains("dark")
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';
  lucide.createIcons();
}

modal.className = "modal";
modal.innerHTML = `
  <span class="close-btn">&times;</span>
  <img>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector(".close-btn");

document.querySelectorAll(".images img").forEach(img => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.getElementById("closeModal");

  document.querySelectorAll(".imagesmoodmoode img, .images img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";
  modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };
});
