// Define each level of the game as a 2D array.
// "*" represents a wall, "." represents a path, "S" is the starting point, and "T" is the treasure.
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

// Create an array of all the levels for easy access later.
const LEVELS = [LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6];

// Initialize game variables. 


// currentLevel tracks the current level the player is on.
let currentLevel = 0;
// playerPosition tracks the player's current position in the maze.
let playerPosition = { row: 0, col: 0 };

// Function to create the visual representation of the maze.
function createMaze(level) {
  // It takes a level as an argument and uses this to create a table with rows and cells.
  const mazeDiv = document.querySelector("main");
  mazeDiv.innerHTML = "";

  const table = document.createElement("table");

  for (let i = 0; i < level.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < level[i].length; j++) {
      const cell = document.createElement("td");
// Each cell is given a CSS class based on its type (wall, path, start, or treasure).
      switch (level[i][j]) {
        case "*":
          cell.classList.add("wall");
          break;
        case ".":
          cell.classList.add("path");
          break;
        case "S":
          cell.classList.add("start");
          playerPosition = { row: i, col: j };
          break;
        case "T":
          cell.classList.add("treasure");
          break;
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  mazeDiv.appendChild(table);
}

// Function to handle the player's movement.

function handlePlayerMove(event) {
  const level = LEVELS[currentLevel];
  let newPosition = { ...playerPosition };

// It is called whenever a keydown event occurs.
// It checks which arrow key was pressed and updates the player's position accordingly.

  switch (event.key) {
    case "ArrowUp":
      newPosition.row--;
      break;
    case "ArrowDown":
      newPosition.row++;
      break;
    case "ArrowLeft":
      newPosition.col--;
      break;
    case "ArrowRight":
      newPosition.col++;
      break;
  }
// If the new position is a wall, it doesn't update the player's position.
  if (
    newPosition.row >= 0 &&
    newPosition.row < level.length &&
    newPosition.col >= 0 &&
    newPosition.col < level[0].length &&
    level[newPosition.row][newPosition.col] !== "*"
  ) {
    const table = document.querySelector("table");
    const oldCell = table.rows[playerPosition.row].cells[playerPosition.col];
    const newCell = table.rows[newPosition.row].cells[newPosition.col];

    oldCell.classList.remove("start");
    newCell.classList.add("start");

    playerPosition = newPosition;
// If it's a treasure, the player proceeds to the next level.
    if (level[newPosition.row][newPosition.col] === "T") {
      currentLevel++;

      if (currentLevel < LEVELS.length) {
        createMaze(LEVELS[currentLevel]);
      } else {
        alert("Congratulations! You have completed all levels!");
      }
    }
  }
}
// Add an event listener for keydown events on the window and call the handlePlayerMove
window.addEventListener("keydown", handlePlayerMove);

// Start the game by creating the first level of the maze.
createMaze(LEVELS[currentLevel]);