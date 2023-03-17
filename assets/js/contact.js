// all elements
const sendBtn = document.getElementById("send-btn");
const popup = document.querySelector(".popupp");
const xIcon = document.querySelector(".fa-x");


// click function
sendBtn.addEventListener("click", () => {
    popup.classList.add("pop-active");

  setTimeout(() => {
    popup.classList.remove("pop-active");
  }, "3000");
});

xIcon.addEventListener("click",()=>{
  popup.classList.remove("pop-active")
})
