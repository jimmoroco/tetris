let canvas;
let context;

const BLOCK_SIZE = 20;
const CANVAS_WIDTH = 14;
const CANVAS_HEIGHT = 35;

window.onload = function () {
    initializeCanvas();
}


function initializeCanvas() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = BLOCK_SIZE * CANVAS_WIDTH;
    canvas.height = BLOCK_SIZE * CANVAS_HEIGHT;
    context.scale(BLOCK_SIZE, BLOCK_SIZE);
}