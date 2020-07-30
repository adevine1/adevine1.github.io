$(document).ready(function() {
    console.log("document ready");


    let mousestate = 0;
    let currentColor="dodgerblue";
    let dimensions = 20;
    var lifeGrid = [];
    createGrid();

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
        lifeGrid [xcoord-1][ycoord-1]= "*"
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
            lifeGrid [xcoord-1][ycoord-1]= "*"
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
        for (var x = 1; x <21; x++) {
            for (var y = 1; y<21; y++){
                //console.log(`${x}-${y}`);
                var getColor = document.getElementById(`${x}-${y}`);
                if (getColor.style.backgroundColor==="dodgerblue")
                    $(`#${x}-${y}`).css("backgroundColor", "white")
                else $(`#${x}-${y}`).css("backgroundColor", "dodgerblue")
            }
        }
    })

    function createGrid() {
        for (var x = 0; x<20; x++) {
          var newArray=new Array();
            for (var y=0; y<20; y++) {
              if ((x!==0) || (x!==dimensions-1) || (y!==0) || (y!==dimensions-1))
                newArray.push(0);
            }
            lifeGrid.push(newArray);
        }
        console.log(lifeGrid);
    }
});