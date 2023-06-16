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

// currentLevel tracks the current level the player is on.
let currentLevel = 0

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

// Function to handle the player's movement.

// It is called whenever a keydown event occurs.
function handlePlayerMove(event) {
  const level = LEVELS[currentLevel]
  let newPosition = { ...playerPosition }

  // Update the nextToPreviousPosition before updating the previousPosition.
  nextToPreviousPosition = { ...previousPosition }
  previousPosition = { ...playerPosition }

  // It checks which arrow key was pressed and updates the player's position accordingly.

  switch (event.key) {
    case "ArrowUp":
      newPosition.row--
      break
    case "ArrowDown":
      newPosition.row++
      break
    case "ArrowLeft":
      newPosition.col--
      break
    case "ArrowRight":
      newPosition.col++
      break
  }
  // If the new position is a wall, it doesn't update the player's position.
  if (
    newPosition.row >= 0 &&
    newPosition.row < level.length &&
    newPosition.col >= 0 &&
    newPosition.col < level[0].length
  ) {
    if (level[newPosition.row][newPosition.col] === "*") {
      // If the player hits a wall, move them back 2 steps.
      newPosition = nextToPreviousPosition
    } else if (level[newPosition.row][newPosition.col] === "T") {
      // If the player finds the treasure, proceed to the next level.
      currentLevel++

      if (currentLevel < LEVELS.length) {
        createMaze(LEVELS[currentLevel])
      } else {
        alert("Congratulations! You have completed all levels!")
        return
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

// Add an event listener for keydown events on the window and call the handlePlayerMove
window.addEventListener("keydown", handlePlayerMove)

// Start the game by creating the first level of the maze.
createMaze(LEVELS[currentLevel])
