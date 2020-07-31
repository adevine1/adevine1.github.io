$(document).ready(function() {
    console.log("document ready");

    let mousestate = 0;
    let currentColor="black";

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
        console.log (this);
        this.style.backgroundColor=currentColor;
        let coordinatesString = this.id;

        let dash = coordinatesString.indexOf("-");
        let xcoord = coordinatesString.slice (0, dash)
        let ycoord = coordinatesString.slice (dash+1, coordinatesString.length);

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = currentColor;
        ctx.fillRect(ycoord-1, xcoord-1, 1, 1);
    })

    $(".blocky").mouseenter( function () {

        console.log (this);

        if(mousestate===1) {
            this.style.backgroundColor=currentColor;
            let coordinatesString = this.id;

            let dash = coordinatesString.indexOf("-");
            let xcoord = coordinatesString.slice (0, dash)
            let ycoord = coordinatesString.slice (dash+1, coordinatesString.length);

            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = currentColor;
            ctx.fillRect(ycoord-1, xcoord-1, 1, 1);
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