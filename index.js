const LEVEL_1 = [
  ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
  ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
  ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
  ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
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
  ["*", ".", ".", "*", "*", "*", ".", "*"],
  ["*", ".", ".", "*", "*", "*", ".", "*"],
  ["*", "*", ".", "*", "*", "*", "*", "*"],
  ["*", "T", ".", "*", "*", "*", "*", "*"],
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

const LEVELS = [LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6]

// Variables to store the player's current position
let playerRow = 0
let playerCol = 0
let currentLevel = 0

// Function to create the maze
const createMaze = (level) => {
  // Selecting the main tag where the maze will be inserted
  const mazeDiv = document.querySelector("main")

  // Creating a table to represent the maze
  const table = document.createElement("table")

  // Iterating over each row in the level
  for (let i = 0; i < level.length; i++) {
    // Creating a table row for each row in the level
    const row = document.createElement("tr")

    // Iterating over each cell in the row
    for (let j = 0; j < level[i].length; j++) {
      // Creating a table cell for each cell in the row
      const cell = document.createElement("td")

      // Styling the cell
      cell.style.width = "3rem"
      cell.style.height = "3rem"

      // Coloring the cell based on its value in the level
      switch (level[i][j]) {
        case "*":
          cell.style.backgroundColor = "green" // Walls are green
          break
        case ".":
          cell.style.backgroundColor = "white" // Paths are white
          break
        case "S":
          cell.style.backgroundColor = "yellow" // Start is yellow
          break
        case "T":
          cell.style.backgroundColor = "red" // Treasure is red
          break
      }

      // Appending the cell to the row
      row.appendChild(cell)
    }

    // Appending the row to the table
    table.appendChild(row)
  }

  // Appending the table to the main tag
  mazeDiv.appendChild(table)

  // Find the player's starting position
  for (let i = 0; i < level.length; i++) {
    for (let j = 0; j < level[i].length; j++) {
      if (level[i][j] === "S") {
        playerRow = i
        playerCol = j
      }
    }
  }
}

// Function to clear the current maze
function clearMaze() {
  const mazeDiv = document.querySelector("main")
  while (mazeDiv.firstChild) {
    mazeDiv.removeChild(mazeDiv.firstChild)
  }
}

// Function to update the player's position in the DOM
function updatePlayerPosition(oldRow, oldCol, newRow, newCol) {
  const table = document.querySelector("table")
  const oldCell = table.rows[oldRow].cells[oldCol]
  const newCell = table.rows[newRow].cells[newCol]

  oldCell.style.backgroundColor = "white" // Set the old cell color to path color
  newCell.style.backgroundColor = "yellow" // Set the new cell color to player color
}

// Player movement
const player = (level) => {
  // Listen for keypress events
  window.addEventListener("keydown", (event) => {
    // Variables to store the new player position
    let newRow = playerRow
    let newCol = playerCol

    // Calculate the new player position based on the key pressed
    switch (event.key) {
      case "ArrowUp":
        newRow--
        break
      case "ArrowDown":
        newRow++
        break
      case "ArrowLeft":
        newCol--
        break
      case "ArrowRight":
        newCol++
        break
    }

    // Check if the move is valid (i.e., the player is not trying to move into a wall)
    if (
      newRow >= 0 &&
      newRow < level.length &&
      newCol >= 0 &&
      newCol < level[0].length &&
      level[newRow][newCol] !== "*"
    ){
      // Update the player's position in the DOM
      updatePlayerPosition(playerRow, playerCol, newRow, newCol)

      // Update the player's current position
      playerRow = newRow
      playerCol = newCol

      // Check if the player has reached the target
      if (level[newRow][newCol] === "T") {
        // Player has reached the target, go to the next level
        currentLevel++

        if (currentLevel < LEVELS.length) {
          // Clear the current maze
          clearMaze()

          // Create the new maze
          createMaze(LEVELS[currentLevel])

          // Initialize the player for the new maze
          player(LEVELS[currentLevel])
        } else {
          // All levels completed, display a congratulation message
          const mazeDiv = document.querySelector("main")
          const message = document.createElement("h1")
          message.textContent =
            "Congratulations! You have completed all levels!"
          mazeDiv.appendChild(message)
        }
      }
    }
  })
}

// Call the function to create the maze for the first level
createMaze(LEVELS[currentLevel])

// Initialize the player for the first level
player(LEVELS[currentLevel])
