// menu acilmasi ucun
const projectsMenu = document.querySelector(".projects-menu");
const projectsSide = document.querySelector(".projects-side");

projectsMenu.addEventListener("click", () => {
  projectsSide.classList.toggle("active-menu");
});



// brand hissede renglerin deyismesi

// for(var i =0; i<brandSide.length-1; i++){
//     brandSide[i].addEventListener("click", ()=>{
//         brandSide[i].classList.add("brand-active")
//         serviceSide[i].classList.add("branding-active")
//     })
// }


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
