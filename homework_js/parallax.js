
/************************************  Parallax *****************************/
let lastWrapper = document.getElementsByClassName('wrapper')[0];

function scrollTop2() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

onscroll = () => {
    if (pageYOffset >= 200) {
        true;
    } else false;

    lastWrapper.style.transform = `translateY(${pageYOffset/1.5}px)`;
    lastWrapper.style.filter = `brightness(${pageYOffset+100}%)`;
};
