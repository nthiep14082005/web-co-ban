const modal = document.getElementById("review__modal");
const link = document.getElementById("reviews__link");
const closeBtn = document.querySelector(".review__write-close");

link.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.display = "block";
})

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
})

window.addEventListener("click",function(event){
    if (event.target === modal){
        modal.style.display = "none";
    }
})