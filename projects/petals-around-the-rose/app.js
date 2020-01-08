$(document).ready(function() {

  console.log("document ready");
  $("#rules").hide(0);
  $("#submitguess").disabled;
  let diceArray =[];
  let t = 6;
  let run = 0;

  $("#rollbutton").click(function() {
    diceArray = [];
    t=0;
    $("#entertext").val("");
    $("#resulttext").text("...")

    for (let x=1; x<7; x++) {
      let randNum = (Math.floor(Math.random ()*6) + 1);
      diceArray.push (randNum);
      if (randNum==3)
        t += 2;
      if (randNum==5)
        t += 4;
    }

    for (let x=0; x<6; x++) {
      $(`#d${x+1}`).attr ("src", `assets/Dice-${diceArray[x]}.png`);
    }
    console.log (diceArray);
    console.log (t);

    $("#submitguess").removeAttr ("disabled");
   });

  $("#submitguess").click (function () {
    $("#submitguess").attr ("disabled", true);
    var str = $("#entertext").val();
    if (str == "")
      str = 0;
    if (str == t) {
      console.log ("correct");
      $("#resulttext").text ("Correct! The total is " + t + ".");
      run ++;
      $("#runnumber").text ("Run: " + run)
    }
    else {
      console.log ("incorrect");
      $("#resulttext").text ("Sorry, the total is " + t + ".");
      run = 0;
      $("#runnumber").text ("Run: " + run)
    }
  })

  $("#rulesbutton").click (function () {
    $("#rules").toggle();
  })

});