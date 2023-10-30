let canvas;
let context;

const BLOCK_SIZE = 20;
const CANVAS_WIDTH = 14;
const CANVAS_HEIGHT = 25;

let board = [];

window.onload = function () {
    initializeCanvas();
}


function initializeCanvas() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = BLOCK_SIZE * CANVAS_WIDTH;
    canvas.height = BLOCK_SIZE * CANVAS_HEIGHT;
    context.scale(BLOCK_SIZE, BLOCK_SIZE);
    generateBoard();
}

function generateBoard() {
    let row = [];
    for (let i = 0; i < CANVAS_HEIGHT; i++) {
        for (let j = 0; j < CANVAS_WIDTH; j++) {
            row.push(0);
        }
        board.push(row);
    }
}