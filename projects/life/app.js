$(document).ready(function() {
    console.log("document ready");

    let mousestate = 0;
    let currentColor="dodgerblue";

   $(document).mousedown (function () {
        mousestate=1;
        console.log (mousestate);
    })

    $(document).mouseup (function () {
        mousestate=0;
        console.log (mousestate);
    })

    $("#start").click(function () {
        // count ++;
        // console.log (`button clicked ${count} times.`)
    });

    $(".blocky").click (function () {

        if (this.style.backgroundColor !== currentColor)
            this.style.backgroundColor=currentColor
        else this.style.backgroundColor = "white";

        let coordinatesString = this.id;

        let dash = coordinatesString.indexOf("-");
        let xcoord = coordinatesString.slice (0, dash)
        let ycoord = coordinatesString.slice (dash+1, coordinatesString.length);

        console.log(`This square is at row ${xcoord}, column ${ycoord}`);
    })

    $(".blocky").mouseenter( function () {
        console.log (this);
        if(mousestate===1) {
            this.style.backgroundColor=currentColor;
        }
    })

    $(".colorselect").click(function () {
        console.log (this);
        currentColor=this.style.backgroundColor;
        console.log (currentColor);
        $(".paintbrush").css ("backgroundColor", currentColor);
    })

    $("#clear").click(function () {
        $(".blocky").css("backgroundColor", "white");
    })

    $("#start").click(function () {
        for (var x = 1; x <21; x++) {
            for (var y = 1; y<21; y++){
                console.log(`${x}-${y}`);
                var getColor = document.getElementById(`${x}-${y}`);
                if (getColor.style.backgroundColor==="dodgerblue")
                    $(`#${x}-${y}`).css("backgroundColor", "white")
                else $(`#${x}-${y}`).css("backgroundColor", "dodgerblue");

            }
        }
    })

});