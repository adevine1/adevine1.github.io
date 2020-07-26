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

dimensions = 5;
console.log(createGrid (dimensions));


function toggle(element) {
  e=element;
  //e.style.backgroundColor = "red";
  console.log (element);
  if (e.style.backgroundColor === "white")
    e.style.backgroundColor = "blue"
  else e.style.backgroundColor = "white";
    console.log (e.style.backgroundColor);
}




