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
        count ++;
        console.log (`button clicked ${count} times.`)
    });

    $(".blocky").click (function () {

        if (this.style.backgroundColor !== currentColor)
            this.style.backgroundColor=currentColor
        else this.style.backgroundColor = "white";

        let coordinatesString = this.id;

        let comma = coordinatesString.indexOf(",");
        let xcoord = coordinatesString.slice (0, comma);

        let space = coordinatesString.indexOf(" ");
        let ycoord = coordinatesString.slice (space, coordinatesString.length);

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

});