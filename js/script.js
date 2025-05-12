// UNTUK BURGER PADA NAVBAR
const toggleBtn = document.getElementById("menu-icon");
const navList = document.getElementById("navList");
const navitem = document.querySelector(".nav-list ul li a");

// toggle navlist
toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// remove toggle
document.addEventListener("click", function (e) {
  if (!toggleBtn.contains(e.target)) {
    navList.classList.remove("active");
  }
});

// SLIDE PAGE UNTUK BLOG
let curentpage = 1;
const slidepages = [
  {
    img: "img/miquel-ferran-gomez.jpg",
    title: "Miquel Ferran Gomez",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio itaque nulla voluptatem doloribus, magnam a nostrum incidunt est amet vel ducimus recusandae nemo ab at dolorum. Expedita, deserunt laborum!",
  },
  {
    img: "img/manik.jpeg",
    title: "Manik Wastika",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio itaque nulla voluptatem doloribus, magnam a nostrum incidunt est amet vel ducimus recusandae nemo ab at dolorum. Expedita, deserunt laborum!",
  },
  {
    img: "img/pexels-kampus-5920775.jpg",
    title: "Joko Susanto",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat optio itaque nulla voluptatem doloribus, magnam a nostrum incidunt est amet vel ducimus recusandae nemo ab at dolorum. Expedita, deserunt laborum!",
  },
];

function updateSlide() {
  const slider = document.getElementById("slider");
  slider.querySelector("img").src = slidepages[curentpage]["img"];
  slider.querySelector(".isi-text h1").textContent =
    slidepages[curentpage]["title"];
  slider.querySelector(".isi-text p").textContent =
    slidepages[curentpage]["subTitle"];

  dotActivate();
}

// titik 3 untuk ganti active boys
function dotActivate() {
  const semuaDots = document.querySelectorAll(".dot ul li");

  // fungsi reset
  for (let i = 0; i < semuaDots.length; i++) {
    const dot = semuaDots[i];
    dot.style.backgroundColor = "rgba(255, 143, 16, 0.5)";
  }

  if (curentpage < semuaDots.length) {
    semuaDots[curentpage].style.backgroundColor = "rgba(255, 143, 16, 1)";
  }
}

function nextKonten() {
  curentpage = (curentpage + 1) % slidepages.length;
  updateSlide();
}

function prevKonten() {
  curentpage = (curentpage - 1 + slidepages.length) % slidepages.length;
  updateSlide();
}

updateSlide();
