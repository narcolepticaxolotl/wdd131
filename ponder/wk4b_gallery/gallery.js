// 20260129
// https://wddbyui.github.io/wdd131/ponder/ponder_wk4b.html
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

// listener to open modal viewer
function openModal(e) {
    const image = e.target; // "e" is a built-in thing. the target event that happens when you click on something.
    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');
    const largeSrc = src.replace('-sm', '-full');

    modalImage.setAttribute('src', largeSrc);
    modalImage.setAttribute('alt', alt);
    modal.showModal();
    // show moadal viewer. Use paramter 'e'.
}

// Close modal viewer on button click.
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal viewer if clicking outside 
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});