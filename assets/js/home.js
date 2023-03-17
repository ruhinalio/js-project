// menu acilmasi ucun
const projectsMenu = document.querySelector(".projects-menu");
const projectsSide = document.querySelector(".projects-side");

projectsMenu.addEventListener("click", () => {
  projectsSide.classList.toggle("active-menu");
});



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
    serviceSide.forEach((el,i) =>{
        if (i === index) {
            el.classList.add("branding-active");
          } else {
            el.classList.remove("branding-active");
          }
    })
  });
});

// slide hissesi ucun
const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      
      
      slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides. forEach((slide) => {
        slide. classList. remove('active')
    })
}