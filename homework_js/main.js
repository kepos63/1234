/************************************  Menu *****************************/



    let menuButton = document.getElementById("btn-menu");
    let menuActive = document.getElementById("creep-menu");
    let menuContent = document.getElementById("content");



    function openMenu() {

        menuActive.classList.toggle("active");


    }

    function closeMenu() {

        menuActive.classList.remove("active");

    }

    menuButton.addEventListener("click", openMenu);
    menuContent.addEventListener("click", closeMenu);























