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
      isMine:false,
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
  var newNum=0
  for(i=0; i<board.cells.length;i++){
    countSurroundingMines(board.cells[0,1,2,3,4,5,6,7,8])
  }
  board.cells[0,1,2,3,4,5,6,7,8].surroundingMines=newNum
}
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  //for( i=0; i<board.cells.length; i++) {
    //if ((cell.isMine==true &&cell.isMarked==true)==true &&(cells.isMine==false&&cell.hidden==false)==true)
      //lib.displayMessage('You win!')
  //}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//var surrounding = lib.getSurroundingCells(row, col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count=0
  var surrounding=lib.getSurroundingCells(board['cells'][0,1,2,3,4,5,6,7,8].row,board['cells'][0,1,2,3,4,5,6,7,8].col)
  for(var i=0;i<surrounding.length;i++){
    if(board['cells'][0,1,2,3,4,5,6,7,8].isMine==true)
    count++;
   
  }
  return count
 
}

console.log(startgame())