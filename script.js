let cellSize = 20; // Size of each cell
let numCells = 30; // Number of cells per row / col
let fps = 30; // Frames of the game
let gameArray = []; // The array depicting the current state of the game
let gameState = 0; // The state of the game. 0 = Setup 1 = Active

// Initial setup of the game
function setup() {
    // Setup canvas 
    let canvas = createCanvas(cellSize * numCells, cellSize * numCells);
    canvas.parent('canvas-area');

    // Setup start button
    let button = createButton("Start Game");
    button.parent('button-area');
    button.position(cellSize * numCells + cellSize, cellSize * numCells + cellSize);

    // Initialise the game array
    for (r = 0; r < numCells; r++) {
        let rowArray = [];
        for (c = 0; c < numCells; c++) {
            rowArray.push(0);
        }
        gameArray.push(rowArray);
    }

    // Sets frame rate
    frameRate(fps);

    // Call button functionality when pressed
    button.mousePressed(startGame);
}

// Draw function
function draw () {
    // Sets the background colour of the canvas area
    background(255);

    // For each cell draw the square based on the array state
    for (row = 0; row < numCells; row++) {
        for (col = 0; col < numCells; col++) {
            // If the contents of the cell is 1 draw a black square
            if (gameArray[row][col] === 1) {
                fill(0);
            // Otherwise draw a white square
            } else {
                fill(255);
            }
            stroke(200);
            rect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }

    if (gameState === 1) {
        // Apply conways game of life rules
        applyConwaysRules();      
    }
}

// Mouse pressed function
function mousePressed() {
    let col = Math.floor(mouseX / cellSize); // Get col position
    let row = Math.floor(mouseY / cellSize); // Get row position

    // If valid cell selection
    if (col >= 0 && col < numCells && row >= 0 && row < numCells) {
        gameArray[row][col] = 1 - gameArray[row][col]; // Toggle value
    }
    console.log(gameArray);
}

// Start game function
function startGame() {
    if (gameState === 0) {
        gameState = 1; // Change game state to active
        fps = 5; 
        frameRate(fps); // Set lower fps
    }
}

// Function for conways rules logic
function applyConwaysRules() {

}