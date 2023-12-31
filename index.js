// Define each level of the game as a 2D array.
// "*" represents a wall, "." represents a path, "S" is the starting point, and "T" is the treasure.
const LEVEL_1 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
  ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
  ["*", ".", ".", ".", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
  ["*", ".", "*", ".", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", "*", ".", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", "*", ".", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*"],
  ["*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
]

const LEVEL_2 = [
  [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
  ],
  [
    "*",
    ".",
    ".",
    "S",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "*",
  ],
  [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    ".",
    "*",
  ],
  [
    "*",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "*",
  ],
  [
    "*",
    ".",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
  ],
  [
    "*",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    ".",
    "T",
  ],
  [
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
  ],
]

const LEVEL_3 = [
  ["*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", "*", "S", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", "*", ".", "*", ".", "*"],
  ["*", ".", ".", "*", ".", ".", ".", "*"],
  ["*", "*", ".", "*", "*", ".", "*", "*"],
  ["*", "T", ".", "*", "*", ".", "*", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*"],
]

const LEVEL_4 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", "*", "*", "*", ".", ".", ".", ".", ".", "*", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", "*", "*", "*", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", ".", "*", "*", "*", ".", "*", "*", "*", "*", "*"],
  ["*", ".", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
]

const LEVEL_5 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "S", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "T", "*", "*", "*", "*", "*", "*", "*"],
]

const LEVEL_6 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", ".", "*", ".", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", ".", "*", ".", "*", ".", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", "T", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
]
const LEVEL_7 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", ".", ".", ".", "*", "*", "*", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*", ".", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", ".", "*", "*", "*", ".", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", "*", "*", "*", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", ".", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
]

const LEVEL_8 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
]

const LEVEL_9 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", ".", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "T", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
]

const LEVEL_10 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "*", "*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
  ["*", "T", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
]

// Create an array of all the levels for easy access later.
const LEVELS = [
  LEVEL_1,
  LEVEL_2,
  LEVEL_3,
  LEVEL_4,
  LEVEL_5,
  LEVEL_6,
  LEVEL_7,
  LEVEL_8,
  LEVEL_9,
  LEVEL_10,
]

// Initialize game variables.
let currentLevel = 0 // currentLevel tracks the current level the player is on.

// variables to store the player's previous and next-to-previous positions.
let previousPosition = { row: 0, col: 0 }
let nextToPreviousPosition = { row: 0, col: 0 }

// Function to create the visual representation of the maze.
function createMaze(level) {
  // It takes a level as an argument and uses this to create a table with rows and cells.
  const mazeDiv = document.querySelector("main")
  mazeDiv.innerHTML = ""

  const table = document.createElement("table")

  for (let i = 0; i < level.length; i++) {
    const row = document.createElement("tr")

    for (let j = 0; j < level[i].length; j++) {
      const cell = document.createElement("td")
      // Each cell is given a CSS class based on its type (wall, path, start, or treasure).
      switch (level[i][j]) {
        case "*":
          cell.classList.add("wall")
          break
        case ".":
          cell.classList.add("path")
          break
        case "S":
          cell.classList.add("gate")
          cell.classList.add("hero")
          playerPosition = { row: i, col: j }
          break
        case "T":
          cell.classList.add("treasure")
          break
      }

      row.appendChild(cell)
    }

    table.appendChild(row)
  }

  mazeDiv.appendChild(table)
  updateFogOfWar()
}
// It is called whenever a keydown event occurs.
function handlePlayerMove(direction) {
  const level = LEVELS[currentLevel]
  let newPosition = { ...playerPosition }

  // Update the previousPosition.
  previousPosition = { ...playerPosition }

  // It checks which arrow key was pressed and updates the player's position accordingly.
  switch (direction) {
    case "up":
      newPosition.row--
      break
    case "down":
      newPosition.row++
      break
    case "left":
      newPosition.col--
      break
    case "right":
      newPosition.col++
      break
  }

  // If the new position is within the maze boundaries and is not a wall
  if (
    newPosition.row >= 0 &&
    newPosition.row < level.length &&
    newPosition.col >= 0 &&
    newPosition.col < level[0].length &&
    level[newPosition.row][newPosition.col] !== "*"
  ) {
    // If the player finds the treasure, proceed to the next level.
    if (level[newPosition.row][newPosition.col] === "T") {
      currentLevel++
      if (currentLevel < LEVELS.length) {
        createMaze(LEVELS[currentLevel])
      } else {
        const gameWonMessage = document.createElement("h1")
        gameWonMessage.textContent = "Congratulations! You have completed all levels!"
        gameWonMessage.style.position = "fixed"
        gameWonMessage.style.top = "50%"
        gameWonMessage.style.left = "50%"
        gameWonMessage.style.transform = "translate(-50%, -50%)"
        gameWonMessage.style.textAlign = "center"
        gameWonMessage.style.color = "#cad048" 
        document.body.appendChild(gameWonMessage)
      }
    }
    // Update the player's position on the board.
    const table = document.querySelector("table")
    const oldCell = table.rows[playerPosition.row].cells[playerPosition.col]
    const newCell = table.rows[newPosition.row].cells[newPosition.col]

    oldCell.classList.remove("hero")
    oldCell.classList.add("path")
    newCell.classList.add("hero")

    playerPosition = newPosition
    updateFogOfWar() // Call this function after every move to update the visibility around the player.
  }
}


// Function to implement the fog of war.
function updateFogOfWar() {
  const visibilityRadius = 1 // Define the visibility radius.
  const table = document.querySelector("table")

  // First, make all cells invisible.
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].classList.add("fog")
    }
  }

  // Then, make cells within the visibility radius visible.
  for (
    let i = Math.max(playerPosition.row - visibilityRadius, 0);
    i <= Math.min(playerPosition.row + visibilityRadius, table.rows.length - 1);
    i++
  ) {
    for (
      let j = Math.max(playerPosition.col - visibilityRadius, 0);
      j <=
      Math.min(
        playerPosition.col + visibilityRadius,
        table.rows[i].cells.length - 1
      );
      j++
    ) {
      table.rows[i].cells[j].classList.remove("fog")
    }
  }
}

// Function to handle the player's movement.
window.addEventListener('keydown', function(event) {
  let direction;
  switch (event.key) {
    case "ArrowUp":
      direction = "up";
      break
    case "ArrowDown":
      direction = "down";
      break
    case "ArrowLeft":
      direction = "left";
      break
    case "ArrowRight":
      direction = "right";
      break
  }
  handlePlayerMove(direction);
});

// For touch events
let touchStartX = 0;
let touchStartY = 0;

window.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, false);

window.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    let direction;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        if (diffX > 0) {
            direction = "right";
        } else {
            direction = "left";
        }
    } else {
        // Vertical swipe
        if (diffY > 0) {
            direction = "down";
        } else {
            direction = "up";
        }
    }
    handlePlayerMove(direction);
}, false);

// Start the game by creating the first level of the maze.
createMaze(LEVELS[currentLevel])
