// Conway's Game of Life
// Rules:
// 1. Any live cell with two or three neighbors survives.
// 2. Any dead cell with three live neighbors becomes a live cell.
// 3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

function createGrids (dimensions) {
  for (var x = 0; x<dimensions; x++) {
    let newArray=new Array();
    let newArrayCopy = new Array ();
      for (var y=0; y<dimensions; y++) {
        var rand=Math.floor((Math.random() * 3) + 1);
        if ((x===0) || (x===dimensions-1) || (y===0) || (y===dimensions-1)) {
          newArray.push(0)
        } else
          if (rand === 2) {
          newArray.push(1);
        } else {
          newArray.push(0);
        }
        newArrayCopy.push(0)
      }
    lifeGrid.push(newArray);
    copyLifeGrid.push(newArrayCopy);
  }
}

function startLife (lifeGrid, copyLifeGrid, dimensions, generations) {
  createGrids (dimensions);
  console.log (lifeGrid);
  for (var gen=0; gen<generations; gen++) {
  console.log('-------------------------');
  for (var x=1; x<dimensions-1; x++) {
    for (var y=1; y<dimensions-1; y++) {
      if (lifeGrid [x][y] === 0) {
       var num = ((lifeGrid [x-1][y-1]) + (lifeGrid [x][y-1]) + (lifeGrid [x+1][y-1]) + (lifeGrid [x-1][y]) + (lifeGrid [x+1][y]) + (lifeGrid [x-1][y+1]) + (lifeGrid [x][y+1]) + (lifeGrid [x+1][y+1]));
        if (num >= 3) {
          copyLifeGrid [x][y] = 1;
        }
      }
      if (lifeGrid [x][y] === 1)
       var num2 = ((lifeGrid [x-1][y-1]) + (lifeGrid [x][y-1]) + (lifeGrid [x+1][y-1]) + (lifeGrid [x-1][y]) + (lifeGrid [x+1][y]) + (lifeGrid [x-1][y+1]) + (lifeGrid [x][y+1]) + (lifeGrid [x+1][y+1]));
        if ((num2 === 2) || (num2 === 3)) {
          copyLifeGrid [x][y] = 1;
        } else {
          copyLifeGrid [x][y] = 0;
      }
    }
  }
  console.log (copyLifeGrid);
  append (copyLifeGrid);
  lifeGrid = copyLifeGrid;
 }
}

function append (currentGeneration) {
  var rowString = '';
  for (var x=0; x<dimensions; x++) {
    for (var y=0; y< dimensions; y++) {
      rowString += (currentGeneration [x][y]);
    }
  console.log(rowString);
  rowString = '';
  }
}



dimensions = 10;
generations = 1;

lifeGrid = [];
copyLifeGrid = [];



startLife (lifeGrid, copyLifeGrid, dimensions, generations);








