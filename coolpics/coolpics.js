// 20260131
// https://wddbyui.github.io/wdd131/prove/prove_wk4.html

// Modal image viewer
{
// console.log('JavaScript loaded!!');
const gallery = document.querySelector('#image-gallery');
const modal = document.querySelector('dialog');
const closeBttn = modal.querySelector('button');
const viewImg = modal.querySelector('img');
// console.log('variables imported!');

gallery.addEventListener('click', openModal);

function openModal(e) {
    const image = e.target;
    const source = image.getAttribute('src');
    const alt_text = image.getAttribute('alt');

    viewImg.setAttribute('src', source);
    viewImg.setAttribute('alt', alt_text);
    modal.showModal();
}

closeBttn.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
}

// mobile menu expand/retract
{
var menuBtn = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-menu');
// console.log('variables imported pt2!');

menuBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
};
}