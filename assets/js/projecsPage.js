//  start click to read more btn
const readMoreBtn= document.getElementById("readmore-btn")
const addingSide= document.querySelector(".flex-adding")


readMoreBtn.addEventListener("click", ()=>{
    addingSide.classList.add("active-more")
    readMoreBtn.classList.remove("active-more")
})
// end click to read more btn