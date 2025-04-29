const toggleBtn = document.getElementById("menu-icon");
const navList = document.getElementById("navList");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
