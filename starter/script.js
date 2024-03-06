'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const open = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const close = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", open)
    //modal.classList.remove("hidden");
    //overlay.classList.remove("hidden");
    //console.log(e.target);

}
//console.log(btnsOpenModal[i].textContent);

btnCloseModal.addEventListener("click", close)
//modal.classList.add("hidden");
//overlay.classList.add("hidden");


overlay.addEventListener("click", close)
//modal.classList.add("hidden");
//overlay.classList.add("hidden")

//keyboard event function on all elements in the page 
document.addEventListener("keydown", function (e) {
    //console.log("A key was pressed");
    //console.log(e);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        /*if (!modal.classList.contains("hidden")) {
            close();
        }*/
        close();

    }
})

