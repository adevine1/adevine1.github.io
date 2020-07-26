// Conway's Game of Life
// Rules:
// 1. Any live cell with two or three neighbors survives.
// 2. Any dead cell with three live neighbors becomes a live cell.
// 3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.





function createGrid (dimensions) {
  var lifeGrid=[];
  for (var x = 0; x<dimensions; x++) {
    let newArray=new Array();
      for (var y=0; y<dimensions; y++) {
        newArray.push(y);
      }
    lifeGrid.push(newArray);
  }
  return lifeGrid;
}

dimensions = 10;
console.log(createGrid (dimensions));





