// brand hissesinde renglerin deyismesi ucun

const elements = [...document.querySelectorAll(".brand")];
const serviceSide = [...document.querySelectorAll(".service")];

elements.forEach((element, index) => {
  element.addEventListener("click", () => {
    elements.forEach((el, i) => {
      if (i === index) {
        el.classList.add("brand-active");
      } else {
        el.classList.remove("brand-active");
      }
    });
    serviceSide.forEach((el, i) => {
      if (i === index) {
        el.classList.add("branding-active");
      } else {
        el.classList.remove("branding-active");
      }
    });
  });
});

// slide hissesi ucun
const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();

    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}


// menu hissesinin acilmasi ucun
const pagesBtn = document.getElementById("pages")
const projectsBtn = document.getElementById("projects")
const projectsHtml = document.querySelector(".for-project")
const pagesHtml = document.querySelector(".for-pages")

function toggleSection(section) {
  section.classList.toggle("porjects-active");
}

pagesBtn.addEventListener("click", () => {
  toggleSection(pagesHtml);
projectsHtml.classList.remove("projects-active");
});

projectsBtn.addEventListener("click", () => {
  toggleSection(projectsHtml);
  pagesBtn.classList.remove("projects-active");
});







// dark mode
// document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
// const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
// const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
// const body = document.querySelector("body")

// var theme = "dark";
//   const root = document.querySelector(":root");
//   const container = document.getElementsByClassName("theme-container")[0];
//   const themeIcon = document.getElementById("theme-icon");
//   container.addEventListener("click", setTheme);
//   function setTheme() {
//     switch (theme) {
//       case "dark":
//         setLight();
//         theme = "light";
//         break;
//       case "light":
//         setDark();
//         theme = "dark";
//         break;
//     }
//   }
//   function setLight() {
//     root.style.setProperty("--text-color", "#000000");

//     root.style.setProperty(
//       "--bs-dark",
//       "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)",
     
//     );
//     container.classList.remove("shadow-dark");
//     setTimeout(() => {
//       container.classList.add("shadow-light");
//       themeIcon.classList.remove("change");
//     }, 300);
//     themeIcon.classList.add("change");
//     themeIcon.src = sun;
//   }
//   function setDark() {
//     root.style.setProperty("--text-color", "#ffffff");

//     root.style.setProperty("--bs-dark", "#212529");
//     container.classList.remove("shadow-light");
//     setTimeout(() => {
//       container.classList.add("shadow-dark");
//       themeIcon.classList.remove("change");
//       body.classList.toggle("light")

//     }, 300);
//     themeIcon.classList.add("change");
//     themeIcon.src = moon;
//   }