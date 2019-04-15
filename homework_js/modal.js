/************************************  modal windows *****************************/



let modalBtn = document.getElementById("modal");
let modalActive = document.getElementById("content-modal");
let modalBtnClose = document.getElementById("close-modal");

function openModal() {

    modalActive.classList.add("active");

}

function closeModal() {

    modalActive.classList.remove("active");
}

modalBtn.addEventListener("click", openModal);
modalBtnClose.addEventListener("click", closeModal);