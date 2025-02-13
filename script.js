let cellSize = 20; // Size of each cell
let numCells = 30; // Number of cells per row / col
let fps = 30; // Frames of the game
let gameArray = []; // The array depicting the current state of the game
let gameState = 0; // The state of the game. 0 = Setup 1 = Active
let canvas;

// Initial setup of the game
function setup() {
    canvas = createCanvas(windowWidth, windowHeight - 100); // Adjust height to account for title and button
    canvas.parent('canvas-area');
    noLoop(); // Don't start the game until the button is clicked

    // Setup start button
    let button = createButton("Start Game");
    button.parent('button-area');
    button.position(cellSize * numCells + cellSize, cellSize * numCells + cellSize);

    // Initialise the game array
    for (row = 0; row < numCells; row++) {
        let rowArray = [];
        for (col = 0; col < numCells; col++) {
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
    background(220);
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

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - 100); // Adjust height to account for title and button
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
    // Find neighbours
    for (row = 0; row < numCells; row++) {
        for (col = 0; col < numCells; col++) {
            let neighbours = 0;
            
            if (gameArray[row][col] === 1) {

            }
        }
    }

    // If cell poplulated:
    // If neighbours = 0|1 cell 'dies'
    // If neighbours = 2|3 cell 'survives' 
    // If neighbours > 4 cell 'dies' to overpopulation

    // If cell unpopulated and neighbours === 3 cell 'born'
}

document.getElementById('start-button').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the button
    loop(); // Start the game loop
});