// 20260127
// https://wddbyui.github.io/wdd131/ponder/ponder_wk4a.html

var menuBtn = document.querySelector(".menu-btn");
// const menu = document.querySelector(".hide");
const menu = document.querySelector('nav');
console.log(menuBtn);
console.log(menu);

menuBtn.addEventListener("click", toggleMenu); // () => {
    // menu.classList.toggle("menu-hide");
    // menuBtn.classList x __ y __ z __
// }); 

function toggleMenu() {
    console.log('Click received!');
    menu.classList.toggle("hide");
    menuBtn.classList.toggle("change");
};