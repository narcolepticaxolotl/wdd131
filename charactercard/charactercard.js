// 20260226
// https://wddbyui.github.io/wdd131/prove/prove_wk8.html

// Initialize card object.
const card = document.querySelector('.card')
// Target buttons to attach functions; we have to re-target the buttons
// at every click on the card, because we're rewriting the card's inner
// HTML with every function.
card.addEventListener('click', function (event) {
    if (event.target.classList.contains('attack-button')) {
        characterInfo.attacked(20);
    }
    if (event.target.classList.contains('lvl-up-button')) {
        characterInfo.levelUp();
    }
});

// Store character details and methods.
const characterInfo = {
    image_source: "images/Screenshot 2026-02-26 162416.png",
    image_alt: "pirate lizard man with sword",
    name: 'Red Bramman',
    character_class: 'Pirate Captain',
    level: 5,
    health: 100,
    attacked: function(damage) {
        this.health -= damage;
        card.innerHTML = characterCardHTML(characterInfo);
        if (this.health <= 0) {
            alert('Character Died.');
        }
        renderCharacterCard();
    },
    levelUp: function() {
        this.level ++;
        renderCharacterCard();
    }
};

// Write HTML for card. We'll also use this to update each change.
function characterCardHTML(characterInfo) {
    return `
    <img src="${characterInfo.image_source}" alt="${characterInfo.image_alt}" class="image">
    <h3 class="name">${characterInfo.name}</h3>
    <div class="stats">
        <p><b>Class:</b> ${characterInfo.character_class}</p>
        <p><b>Level:</b> ${characterInfo.level}</p>
        <p><b>Health:</b> ${characterInfo.health}</p>
    </div>
    <div class="buttons">
        <button class="attack-button">Attacked</button>
        <button class="lvl-up-button">Level Up</button>
    </div>
    `
};

// Apply change to document.
function renderCharacterCard() {
    card.innerHTML = characterCardHTML(characterInfo);
};

renderCharacterCard();