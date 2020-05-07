let size = 16;
let color;
let sizeOptions = document.getElementById('board-size');
let cell = document.getElementsByClassName('main-container')[0];
let div = document.getElementById('container');
let rainbow = document.getElementById('random');
let blackBtn = document.getElementById('black');
let resetBtn = document.getElementById('reset');
const resizeBtn = document.getElementById('resize');
let square = document.getElementsByClassName('square')[0]

//create  new  square for div container
function createSquare(size) {
    let squareSize = div.clientWidth / size;
    for (let i = 0; i < size; i++) {
        for (let s = 0; s < size; s++) {
            let newSquare = document.createElement('div');
            newSquare.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
            newSquare.classList.add('square');
            div.appendChild(newSquare)
            console.log(`width: ${squareSize}px; height: ${squareSize}px`)
        }
    }
}
createSquare();

//get random colors
function getRandomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
//apply colors to square
function applyColor(e) {
    let cell = e.target;

    switch (color) {
        case 'black':
            color = 'black'
            blackBtn.addEventListener('click', () => {
                cell.style.background = 'black';
            })
            break;
        case 'random':
            color = getRandomColors();
            break;
        default:
            cell.style.background = 'pink'
    }
}

//change square size
function changeSquareSize() { 
    let size = Number(sizeOptions.value);
   
    div.textContent = '';
    createSquare(size);
}

changeSquareSize(16);

// function blackColor(e) {
//     square = e.target;
//     blackBtn.addEventListener('mouseover', (e) => {
//         square.style.background = 'black'
//     })
// }

//reset div container
function reset() {
    div.textContent = ''
    window.location.reload()
}

div.addEventListener('mouseover', applyColor);
resize.addEventListener('click', changeSquareSize)

