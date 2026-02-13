// 20260210
// https://wddbyui.github.io/wdd131/ponder/ponder_wk6a.html

const numbers = ['one', 'two', 'three'];

const my_list = document.querySelector('#myList');

// console.log(my_list);

const myNewList = numbers.map((number) => {
    const item = `<li>${number}</li>`;
    return item
})
// console.log(myNewList);
my_list.innerHTML = myNewList.join('');
numbers.forEach((item) => {console.log(item)});



function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
    


const grades = ['A', 'A', 'B', 'C'];

const gradePoints = grades.map(convert);

console.log(gradePoints);

const gpa = gradePoints.reduce((total, points) => total += points);
console.log(gpa);


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const filterFruits = words.filter((fruit) => {
    return fruit.length >= 6;
});

console.log(filterFruits);

words.forEach((fruit) => {
    console.log(`The index of ${fruit} is ${words.indexOf(fruit)}`)
});


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const studentContainer = document.querySelector('#studentContainer');
console.log(studentContainer);

students.forEach((student) => {
    let name = document.createElement('div');
    name.className = 'format';
    let html = `<span>${student.first} ${student.last}</span>
    <hr>`;
    name.innerHTML = html;
    studentContainer.appendChild(name);
});
