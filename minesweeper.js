document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// var board = 
var board={
  cells:[
    {
      row:0,
      col:0,
      isMine:false,
      hidden:true,
    },
    {
      row:0,
      col:1,
      isMine:true,
      hidden:true,
    },
    {
      row:0,
      col:2,
      isMine:true,
      hidden:true,
    },
    {
      row:1,
      col:0,
      isMine:true,
      hidden:true,
    },
    {
      row:1,
      col:1,
      isMine:true,
      hidden:true,
    },
    {
      row:1,
      col:2,
      isMine:false,
      hidden:true,
    },
    {
      row:2,
      col:0,
      isMine:true,
      hidden:true,
    },
    {
      row:2,
      col:1,
      isMine:true,
      hidden:true,
    },
    {
      row:2,
      col:2,
      isMine:true,
      hidden:true,
    }
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  for(i=0; i<board.cells.length; i++) {
    var n=""
    countSurroundingMines(board.cells[0,1,2,3,4,5,6,7,8])=n
    board.cells[0,1,2,3,4,5,6,7,8].SurroundingMines=n
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for(i=0; i<board.cells.length; i++) {
    if (cell.isMine &&cell.isMarked)
      return lib.displayMessage('You win!')
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
var surrounding = lib.getSurroundingCells(cells.row, cells.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  for(i=0;i<surrounding.length;i++){
    if(cells.isMine==true)
    count++;
  }

 
}

