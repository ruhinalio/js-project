// all elements is here
const pageOne = document.querySelector(".blog1");
const pageTwo = document.querySelector(".blog2");
const leftBtn = document.querySelector(".left-page");
const rightBtn = document.querySelector(".right-page");
const oneBtn = document.querySelector(".page1");
const twoBtn = document.querySelector(".page2");

// all events is here
rightBtn.addEventListener("click", ikinciSehife);
twoBtn.addEventListener("click", ikinciSehife);
leftBtn.addEventListener("click", birinciSehife);
oneBtn.addEventListener("click", birinciSehife);

// functions is here
function ikinciSehife() {
  pageOne.classList.remove("blog-active");
  pageTwo.classList.add("blog-active");
  rightBtn.classList.remove("active-change");
  leftBtn.classList.add("active-change");
  window.scrollTo(0,0)
}
function birinciSehife() {
  pageOne.classList.add("blog-active");
  pageTwo.classList.remove("blog-active");
  rightBtn.classList.add("active-change");
  leftBtn.classList.remove("active-change");
  window.scrollTo(0,0)
}
