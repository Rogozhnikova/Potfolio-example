(function(){
    const burgeritem = document.querySelector(".burger");
    const menu = document.querySelector(".header_nav");
    const menuclose = document.querySelector(".header-close");
    burgeritem.addEventListener("click" , () => {
        menu.classList.add("header_nav_activ");
    });
    menucloseitem.addEventListener("click" , () => {
        menu.classList.remove("header_nav_activ");
    });
}());