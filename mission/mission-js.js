// https://wddbyui.github.io/wdd131/prove/prove_wk2.html
console.log('mission-js.js has been loaded.');
let themeSelector = document.querySelector('#theme-select')
let pageContent = document.querySelector('body')
let logo = document.querySelector('img')

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    let currentTheme = themeSelector.value;
    if (currentTheme === 'light') {
        pageContent.style.background = "#fff";
        pageContent.style.color = "#000";
        logo.src = 'images/byui-logo-blue.webp'
        // console.log('Successfully changed to light theme.')
    } else if (currentTheme === 'dark') {
        pageContent.style.background = "#123";
        pageContent.style.color = "#def";
        logo.src = 'images/byui-logo-white.png'
        // console.log('Successfully changed to dark theme.')
    }
}