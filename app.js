let size = 516;
let sizeOptions = document.getElementById('board-size');
let cell = document.getElementsByClassName('main-container')[0];
let div = document.getElementById('container');

div.addEventListener('mouseover', createGrid)


function createGrid() {
    let gridSize = size / sizeOptions.value;
    console.log(gridSize)
    for(let i = 0; i < size; i++) {
    // let div = document.getElementById('container');
    let newCell = document.createElement('DIV');
    newCell.style.cssText = `width: ${gridSize}px; height: ${gridSize}px;`
    newCell.style.float = 'left'; 
    // newCell.setAttribute('class', 'cells')
    // newCell.setAttribute('style', 'background: black; width: `{gridSize}px`;');
    div.appendChild(newCell)
    console.log(sizeOptions.value + " " + gridSize )
    console.log(`width: ${gridSize}px; height: ${gridSize}px`)
    }
}

