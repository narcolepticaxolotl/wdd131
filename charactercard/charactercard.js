// 20260226
// https://wddbyui.github.io/wdd131/prove/prove_wk8.html

// const attackButton = document.querySelector('.attack-button')
// const lvlUpButton = document.querySelector('.lvl-up-button')

const card = document.querySelector('.card')
card.addEventListener('click', function (event) {
    if (event.target.classList.contains('attack-button')) {
        characterInfo.attacked(20);
    }
    if (event.target.classList.contains('lvl-up-button')) {
        characterInfo.levelUp();
    }
});

const characterInfo = {
    image_source: "images/Screenshot 2026-02-26 162416.png",
    image_alt: "pirate lizard man with sword",
    name: 'Red Bramman',
    character_class: 'Pirate Captain',
    level: 5,
    health: 100,
    attacked: function(damage) {
        this.health -= damage;
        // maybe I'll need to update the page now.
        card.innerHTML = characterCardHTML(characterInfo);
        if (this.health <= 0) {
            alert('Character Died.');
        }
        // card.innerHTML = characterCardHTML(characterInfo);
        renderCharacterCard();
    },
    levelUp: function() {
        this.level ++;
        renderCharacterCard();
    }
};

// attackButton.addEventListener("click", function () {
//     characterInfo.attacked(20);
//     // renderCharacterCard();
// });

// 

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

function renderCharacterCard() {
    card.innerHTML = characterCardHTML(characterInfo);
};
renderCharacterCard();
////////////////////////////////////////////////////////

// const characterInfo = {
//     sections: [
//     { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
//     { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
//     { sectionNum: 3, roomNum: 'STC 3000', enrolled: 21, days: 'MWF', instructor: 'Bro T'}
//     ],

//     character_class: 'Pirate Captain',
//     level: 5,
//     health: 100,
//     attacked: function(damage) {
//         this.health -= damage;
//         stats.innerHTML = htmlcharacterInfo(characterInfo);
//     },
//     levelUp: function() {
//         this.level ++;
//     },

//     enrollStudent: function (sectionNum) {
//         // find the right section...Array.findIndex will work here
//         const sectionIndex = this.sections.findIndex(
//           (section) => section.sectionNum == sectionNum
//         );
//         if (sectionIndex >= 0) {
//           this.sections[sectionIndex].enrolled++;
//           renderSections(this.sections);
//         }
//       }
//   };

// function sectionTemplate(characterInfo) {
//     return `<p><b>Class:</b> ${characterInfo.character_class}</p>
//             <p><b>Level:</b> ${characterInfo.currentLvl}</p>
//             <p><b>Health:</b> ${characterInfo.currentHealth}</p>`
// }

// function renderSections(sections) {
// const html = sections.map(sectionTemplate);
// document.querySelector("#sections").innerHTML = html.join("");
// }

// renderSections(aCourse.sections);

// document.querySelector("#enrollStudent").addEventListener("click", function () {
//     const sectionNum = document.querySelector("#sectionNumber").value;
//     aCourse.enrollStudent(sectionNum);
// });

// aCourse.logo = "jslogo.webp"
// document.querySelector("#courseLogo").src = aCourse.logo;