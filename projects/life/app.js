$(document).ready(function() {
    console.log("document ready");

    let mousestate = 0;
    let currentColor="dodgerblue";
    let dimensions = 20;
    var lifeGrid = [];
    var lifeGrid2 = [];
    createGrids();

   $(document).mousedown (function () {
        mousestate=1;
        console.log (mousestate);
    })

    $(document).mouseup (function () {
        mousestate=0;
        console.log (mousestate);
    })


    $(".blocky").click (function () {

        if (this.style.backgroundColor !== currentColor)
            this.style.backgroundColor=currentColor
        else this.style.backgroundColor = "white";

        let coordinatesString = this.id;

        let dash = coordinatesString.indexOf("-");
        let xcoord = coordinatesString.slice (0, dash)
        let ycoord = coordinatesString.slice (dash+1, coordinatesString.length);

        console.log(`This square is at row ${xcoord}, column ${ycoord}`);
        lifeGrid [xcoord-1][ycoord-1]= 1;
        console.log(lifeGrid);
    })

    $(".blocky").mouseenter( function () {
        //console.log (this);
        if(mousestate===1) {
            this.style.backgroundColor=currentColor;

            let coordinatesString = this.id;
            let dash = coordinatesString.indexOf("-");
            let xcoord = coordinatesString.slice (0, dash)
            let ycoord = coordinatesString.slice (dash+1, coordinatesString.length);

            console.log(`This square is at row ${xcoord}, column ${ycoord}`);
            lifeGrid [xcoord-1][ycoord-1]= 1;
            console.log(lifeGrid);
        }


    })

    $("#clear").click(function () {
        $(".blocky").css("backgroundColor", "white");
        for (var x = 0; x < 20; x++) {
            for (var y=0; y<20; y++) {
                lifeGrid [x][y]=0;
            }
        }
        console.log (lifeGrid);
    })

    $("#start").click(function () {

        for (var x=1; x<dimensions-1; x++) {
            for (var y=1; y<dimensions-1; y++) {
              var num=0;
              var num2=0;
              if (lifeGrid [x][y] === 0) {
                num = ((lifeGrid [x-1][y-1]) + (lifeGrid [x][y-1]) + (lifeGrid [x+1][y-1]) + (lifeGrid [x-1][y]) + (lifeGrid [x+1][y]) + (lifeGrid [x-1][y+1]) + (lifeGrid [x][y+1]) + (lifeGrid [x+1][y+1]));
               console.log(num);
                if (num >= 3) {
                    lifeGrid2[x][y] = 1;
                  //copyLifeGrid [x][y] = 1;
                  //$(`#${x}-${y}`).css("backgroundColor", "dodgerblue")
                }
              }

              if (lifeGrid [x][y] === 1)
              num2 = ((lifeGrid [x-1][y-1]) + (lifeGrid [x][y-1]) + (lifeGrid [x+1][y-1]) + (lifeGrid [x-1][y]) + (lifeGrid [x+1][y]) + (lifeGrid [x-1][y+1]) + (lifeGrid [x][y+1]) + (lifeGrid [x+1][y+1]));
                if ((num2 === 2) || (num2 === 3)) {
                    lifeGrid2[x][y] = 1;
                } else {
                    lifeGrid2[x][y] = 0;
              }
            }
          }
          console.log(lifeGrid2);
          for (var z=0;z<dimensions; z++) {
              for (var q=0; q<dimensions; q++) {
                if (lifeGrid2[z][q] === 1)
                  $(`#${x}-${y}`).css("backgroundColor", "dodgerblue")
                else
                  $(`#${x}-${y}`).css("backgroundColor", "white")
              }
          }
    })

    function createGrids() {
        for (var x = 0; x<20; x++) {
          var newArray=new Array();
            for (var y=0; y<20; y++) {
              if ((x!==0) || (x!==dimensions-1) || (y!==0) || (y!==dimensions-1))
                newArray.push(0);
            }
            lifeGrid.push(newArray);
            lifeGrid2.push(newArray);
        }
        console.log(lifeGrid);
        console.log(lifeGrid2);
    }
});