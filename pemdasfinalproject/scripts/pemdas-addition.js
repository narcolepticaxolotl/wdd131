// 20260409

let colorblack = `#222`;
let colorblue = `#00f`;
let coloryellow = `#ff0`;
let colorred = `#f00`;

const numberBlocks = document.querySelectorAll('.number-block');
// console.log(numberBlocks);

for (i = 0; i < numberBlocks.length; i+=3) {
    // console.log(i);
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
        numValue = -numValue;
        numblock.style.background = colorblue;

        let columnEnd = 11 + startingPosition
        if (columnEnd > 12) {columnEnd ++;} // Since 0 takes up a whole grid column, (effectively 2 values,) add 1 to compensate.

        let columnStart = columnEnd - numValue;
        // console.log(columnStart);
        if (columnEnd > 12 && columnStart < 12) {columnStart --;}
        numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
    } else if (numValue == 0) { // Zero
        numblock.innerHTML = '???';
        numblock.classList.add('drag-&-drop');
        numblock.id = `correct-answer-${correctValue}`;

        if (correctValue < 0) {
            numblock.style.background = '#00f2';
            numblock.style.color = colorblue;
            let columnEnd = 11 + startingPosition;
            if (columnEnd > 12) {columnEnd ++;} // Since 0 takes up a whole grid column, (effectively 2 values,) add 1 to compensate.

            let columnStart = columnEnd + correctValue;
            if (columnEnd > 12 && columnStart < 12) {columnStart --;}
            numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
            if (columnEnd > 12 && columnStart < 12) {columnStart --;}
            } else {
                numblock.style.background = '#f002';
                numblock.style.color = colorred;
                let columnStart = 12 + startingPosition;
                if (columnStart < 11) {columnStart--;}
    
                let columnEnd = columnStart + correctValue;
                if (columnStart < 11 && columnEnd > 11) {columnEnd++;}
                numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
        }
        numblock.style.fontWeight = 'bold';
    } else { // Positive values
        numblock.style.background = colorred;

        let columnStart = 12 + startingPosition;
        if (columnStart < 11) {columnStart--;}

        let columnEnd = columnStart + numValue;
        if (columnStart < 11 && columnEnd > 11) {columnEnd++;}
        numblock.style.gridColumn = `${columnStart} / ${columnEnd}`;
    }

    numblock.style.textAlign = 'center';
    // console.log('');
}

const numberBank = document.querySelector('#ex-1-number-bank');
let ex1Array = [5, 2, -3, 4, -8, 1, -4, 7];
ex1Array.forEach(create_num_block);


function create_num_block(numValue) {
    let newBlock = document.createElement('div');
    newBlock.className = 'number-block';
    newBlock.classList.add('draggable-num-block');
    newBlock.draggable = true;
    newBlock.style.cursor = 'grab';
    newBlock.innerHTML = numValue;
    // <div class="number-block">-4</div>
    
    newBlock.style.textAlign = 'center';
    if (numValue < 0) { // Negative values
       numValue = -numValue;
       newBlock.style.background = colorblue;
    } else {
        newBlock.style.background = colorred;
    }

    // console.log(window.innerWidth);
    if (window.innerWidth < 550) {
        newBlock.style.width = `${4 * numValue}vw`
    } else { // Halve width for large screens.
        newBlock.style.width = `${2 * numValue}vw`
    }
    newBlock.style.flexBasis = 1;

    // Drag-&-drop will all have grid-row: 3 / 4;
    newBlock.style.gridRow = '3 / 4';

    numberBank.appendChild(newBlock);
}

let draggableNumBlocks = document.getElementsByClassName('draggable-num-block');
console.log(draggableNumBlocks[6].parentElement);
// correct answers = [-8, -4, 7, 6, -5, 3]
const box1a = document.querySelector('#correct-answer--8');
const box1b = document.getElementById('correct-answer--4');
const box1c = document.getElementById('correct-answer-7');
// console.log(box1a);
// console.log(box1b);
// console.log(box1c);
const box2a = document.getElementById('correct-answer-6');
const box2b = document.getElementById('correct-answer--5');
const box2c = document.getElementById('correct-answer-3');

for(block of draggableNumBlocks) {
    block.addEventListener('dragstart', function(e) {
        let selectedBox = e.target;

        // Number bank
        numberBank.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        numberBank.addEventListener('drop', function(e) {
            numberBank.appendChild(selectedBox)
            selectedBox = null;
        });
        
        // Exercise 1a
        box1a.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        box1a.addEventListener('drop', function(e) {
            const startPoint = 5;
            let slotParent = box1a.parentElement;
            let slotParentChildren = slotParent.children.length
            if (slotParentChildren < 6) {
                render_num_block(selectedBox, startPoint);
                slotParent.appendChild(selectedBox);
                selectedBox = null;
            } else {
                alert('Please return the previous block to the bank before trying another.');
            }
        });
        // Exercise 1b
        box1b.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        box1b.addEventListener('drop', function(e) {
            const startPoint = -4;
            let slotParent = box1b.parentElement;
            let slotParentChildren = slotParent.children.length
            if (slotParentChildren < 6) {
                render_num_block(selectedBox, startPoint);
                slotParent.appendChild(selectedBox);
                selectedBox = null;
            } else {
                alert('Please return the previous block to the bank before trying another.');
            }
        });
        // Exercise 1c
        box1c.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        box1c.addEventListener('drop', function(e) {
            const startPoint = -6;
            let slotParent = box1c.parentElement; 
            let slotParentChildren = slotParent.children.length
            if (slotParentChildren < 6) {
                render_num_block(selectedBox, startPoint);
                slotParent.appendChild(selectedBox);
                selectedBox = null;
            } else {
                alert('Please return the previous block to the bank before trying another.');
            }
        });
        
        // Exercise 2a
        box2a.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        box2a.addEventListener('drop', function(e) {
            const startPoint = -3;
            let slotParent = box2a.parentElement;
            let slotParentChildren = slotParent.children.length
            if (slotParentChildren < 6) {
                render_num_block(selectedBox, startPoint);
                slotParent.appendChild(selectedBox);
                selectedBox = null;
            } else {
                alert('Please return the previous block to the bank before trying another.');
            }
        });
        // Exercise 2b
        box2b.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        box2b.addEventListener('drop', function(e) {
            const startPoint = 8;
            let slotParent = box2b.parentElement;
            let slotParentChildren = slotParent.children.length
            if (slotParentChildren < 6) { 
                render_num_block(selectedBox, startPoint);
                slotParent.appendChild(selectedBox);
                selectedBox = null;
            } else {
                alert('Please return the previous block to the bank before trying another.');
            }
        });
        // Exercise 2c
        box2c.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        box2c.addEventListener('drop', function(e) {
            const startPoint = -4;
            let slotParent = box2c.parentElement; 
            let slotParentChildren = slotParent.children.length
            if (slotParentChildren < 6) {
                render_num_block(selectedBox, startPoint);
                slotParent.appendChild(selectedBox);
                selectedBox = null;
            } else {
                alert('Please return the previous block to the bank before trying another.');
            }
        });        
        
    });

}



