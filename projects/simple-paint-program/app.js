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