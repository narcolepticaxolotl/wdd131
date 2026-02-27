// 20260226
// https://wddbyui.github.io/wdd131/prove/prove_wk8.html

const stats = document.querySelector('.stats')
stats.innerHTML = htmlCharStats(charStats);
const attackBtn = document.querySelector('.attack-button')

attackBtn.addEventListener("click", function () {
    charStats.attacked(20);
    stats.innerHTML = htmlCharStats(charStats)
});

const charStats = {
    char_class: 'Pirate Captain',
    level: 5,
    health: 100,
    attacked: function(damage) {
        this.health -= damage;
        // stats.innerHTML = htmlCharStats(charStats);

    },
    levelUp: function() {
        this.level ++;
    }
};

function htmlCharStats(charStats) {
    return `<p><b>Class:</b> ${charStats.char_class}</p>
            <p><b>Level:</b> ${currentLvl}</p>
            <p><b>Health:</b> ${currentHealth}</p>`
}

////////////////////////////////////////////////////////

// const charStats = {
//     sections: [
//     { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
//     { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
//     { sectionNum: 3, roomNum: 'STC 3000', enrolled: 21, days: 'MWF', instructor: 'Bro T'}
//     ],

//     char_class: 'Pirate Captain',
//     level: 5,
//     health: 100,
//     attacked: function(damage) {
//         this.health -= damage;
//         stats.innerHTML = htmlCharStats(charStats);
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

// function sectionTemplate(charStats) {
//     return `<p><b>Class:</b> ${charStats.char_class}</p>
//             <p><b>Level:</b> ${charStats.currentLvl}</p>
//             <p><b>Health:</b> ${charStats.currentHealth}</p>`
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