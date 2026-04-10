// 20260409

let colorblack = `#222`;
let colorblue = `#00f`;
let coloryellow = `#ff0`;
let colorred = `#f00`;

const numberBlocks = document.querySelectorAll('.number-block');
console.log(numberBlocks);

for (i = 0; i < numberBlocks.length; i+=3) {
    console.log(i);
    let initialValue = parseInt(numberBlocks[i].innerHTML);
    let finalValue = parseInt(numberBlocks[i+2].innerHTML);
    let correctValue = finalValue - initialValue;
    
    render_num_block(numberBlocks[i]);
    render_num_block(numberBlocks[i+1], initialValue, correctValue);
    render_num_block(numberBlocks[i+2]);
}

function render_num_block(numblock, startingPosition=0, correctValue=0) {
    // console.log(numblock.innerHTML);
    let numValue = parseInt(numblock.innerHTML);

    if (numValue < 0) { // Negative values
        console.log('Negative numValue. All is well?');
        numValue = -numValue;
        numblock.style.background = colorblue;

        let columnEnd = 11 + startingPosition
        if (columnEnd > 12) {columnEnd ++;} // Since 0 takes up a whole grid column, (effectively 2 values,) add 1 to compensate.

        let columnStart = columnEnd - numValue;
        // console.log(columnStart);
        if (columnEnd > 12 && columnStart < 12) {columnStart --;}
        numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
        console.log('All is well so far . . .');
    } else if (numValue == 0) { // Zero
        console.log('numValue zero . . . Hmmm :(');
        // Drag-&-drop will have grid-row: 3 / 4;
        numblock.innerHTML = '???';

        if (correctValue < 0) {
            numblock.style.background = '#00f2';
            numblock.style.color = colorblue;
            console.log(correctValue);
            let columnEnd = 11 + startingPosition;
            if (columnEnd > 12) {columnEnd ++;} // Since 0 takes up a whole grid column, (effectively 2 values,) add 1 to compensate.

            let columnStart = columnEnd + correctValue;
            if (columnEnd > 12 && columnStart < 12) {columnStart --;}
            numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
            if (columnEnd > 12 && columnStart < 12) {columnStart --;}
            } else {
                numblock.style.background = '#f002';
                numblock.style.color = colorred;
                console.log('I am here.');
                let columnStart = 12 + startingPosition;
                console.log(columnStart);
                if (columnStart < 11) {columnStart--;}
    
                let columnEnd = columnStart + correctValue;
                if (columnStart < 11 && columnEnd > 11) {columnEnd++;}
                numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
        }
        numblock.style.fontWeight = 'bold';
        console.log('Well, it looks like it\'s working out so far!');
    } else { // Positive values
        console.log('Positive numValue. (; This should be fun!');
        numblock.style.background = colorred;

        let columnStart = 12 + startingPosition;
        console.log(columnStart);
        if (columnStart < 11) {columnStart--;}

        let columnEnd = columnStart + numValue;
        if (columnStart < 11 && columnEnd > 11) {columnEnd++;}
        numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
        console.log('That was indeed fun. . . . Just gotta wrap things up.');
    }

    numblock.style.textAlign = 'center';
    console.log('There we are! All\'s well that ends well. :)');
    console.log('');
}

let ex1Array = [5, 2, -3, 4, -8, 1, -4, 7];

const numberBank = document.querySelector('#ex-1-number-bank');
function create_num_block(numValue) {
    html = ``
}