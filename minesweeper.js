document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('contextmenu',checkForWin)
document.addEventListener('click',checkForWin)
// Define your `board` object here!
// var board = 
var board={
  cells:[
    {
      row:0,
      col:0,
      isMine:false,
      hidden:true,
      surroundingMines:0,
     
    },
    {
      row:0,
      col:1,
      isMine:false,
      hidden:true,
      surroundingMines:0,
      
    },
    {
      row:0,
      col:2,
      isMine:true,
      hidden:true,
      surroundingMines:0,
      
    },
    {
      row:1,
      col:0,
      isMine:true,
      hidden:true,
      surroundingMines:0,
      
    },
    {
      row:1,
      col:1,
      isMine:false,
      hidden:true,
      surroundingMines:0,
      
    },
    {
      row:1,
      col:2,
      isMine:false,
      hidden:true,
      surroundingMines:0,
      
    },
    {
      row:2,
      col:0,
      isMine:false,
      hidden:true,
      surroundingMines:0,
      
    },
    {
      row:2,
      col:1,
      isMine:true,
      hidden:true,
      surroundingMines:0,
      
    },
    {
      row:2,
      col:2,
      isMine:false,
      hidden:true,
      surroundingMines:0,
     
    }
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  
  for(i=0;i<board['cells'].length;i++){
   countSurroundingMines(i)
  }
  
  
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var count1=0
  var count2=0
  for(i=0;i<board.cells.length;i++){
    if(board.cells[i].isMine==true){
      count1++
    }
    if(board.cells[i].isMine==false){
      count2++
    }
    console.log(count1,count2)
  }
  var count3=0
  var count4=0
  for( i=0; i<board.cells.length; i++) {
    if (board.cells[i].isMine==true&&board.cells[i].isMarked==true){
    
    count3++
    }
    if(board.cells[i].isMine==false&&board.cells[i].hidden==false){
      count4++
    }
    console.log(count3,count4)
  }
  if(count1==count3||count2==count4){
    lib.displayMessage('You Win!')
  }
    
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//var surrounding = lib.getSurroundingCells(row, col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
var test=board.cells[0,1,2,3,4,5,6,7,8]
function countSurroundingMines (cell) {
  var count=0
  var surrounding=lib.getSurroundingCells(board.cells[cell].row,board.cells[cell].col)
  for(var i=0;i<surrounding.length;i++){
    if(surrounding[i].isMine===true){
    count++
    
    }
    
  }
  
  board.cells[cell].surroundingMines=count
}

//console.log(countSurroundingMines(6))