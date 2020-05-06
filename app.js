let size = 16;
let color;
let sizeOptions = document.getElementById('board-size');
let cell = document.getElementsByClassName('main-container')[0];
let div = document.getElementById('container');
let rainbow = document.getElementsByClassName('random')[0]
let resetBtn = document.getElementById('reset');
div.addEventListener('mouseover', applyColor)
rainbow.addEventListener('click', getRandomColors)
//resetBtn.addEventListener('click', reset)


function createSquares() {
    const grid = size * sizeOptions.value
    for(let i  = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
        const gridSize = div.clientWidth / size;
        let newSquare = document.createElement('div');
        newSquare.style.cssText = `width: ${gridSize}px; height: ${gridSize}px`;
        newSquare.classList.add('square');
        div.appendChild(newSquare);
        console.log(gridSize)
        }
    }
    
}

createSquares();

function applyColor(e) {
    let cell = event.target;
        // cell.style.background = getRandomColors();
        switch (color) {
            case 'black': 
            cell.style.background = 'black';
            break;
            case 'color': 
            cell.style.background = getRandomColors();
            break;
            default:
                cell.style.background = 'black'
        }
}

function getRandomColors() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    div.textContent = '';
    window.location.reload()
}