'use strict';
let size = 16;
let color;
let selectedColor;
let sizeOptions = document.getElementById('board-size');
let cell = document.getElementsByClassName('main-container')[0];
let div = document.getElementById('container');
let rainbow = document.getElementById('random');
let blackBtn = document.getElementById('black');
let resetBtn = document.getElementById('reset');
let colorBtn = document.getElementsByTagName('button')
const resizeBtn = document.getElementById('resize');
let square = document.getElementsByClassName('square')[0];
[...document.querySelectorAll('button')].forEach((button) => button.addEventListener('click', setTheme));

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
    const cells = [...document.getElementsByClassName('square')];
    cells.forEach((cell) => cell.addEventListener('mouseover', applyColor));
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
            cell.style.background =  'black';
            break;
        case 'random':
            cell.style.background = getRandomColors();
            break;
        default:
            cell.style.background = 'hotpink';
            console.log(`Selected color = ${color}`);
    }
    setTheme(color)
}


function setTheme(e) {
    color = e.target.id;
    color ? 'random' : 'black';
    console.log(`${color} was click`)
}
//change square size
function changeSquareSize() { 
    //get a square size from the dropdown menu
    let size = Number(sizeOptions.value);
    //reset all div to empty state
    div.textContent = '';
    createSquare(size);
}

changeSquareSize(16);


//reset div container
function reset() {
    div.textContent = ''
    window.location.reload()
}

resize.addEventListener('click', changeSquareSize);
