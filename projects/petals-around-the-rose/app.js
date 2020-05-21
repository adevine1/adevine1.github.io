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
    $("#resulttext").text("enter guess, or roll for new dice")

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

    var snd = new Audio("assets/dice-roll.mp3");
    snd.play();
   });

  $("#submitguess").click (function () {

    var str = $("#entertext").val();
    console.log (str);
    if ((!isNaN(str)) && (str.length > 0)) {
      $("#submitguess").attr ("disabled", true);
      if (str == t) {
        console.log ("correct");
        $("#resulttext").text ("Correct! The total is " + t + ". Roll again to guess a new value.");
        run ++;
        $("#runnumber").text ("run: " + run + " correct")
      }
      else {
        console.log ("incorrect");
        $("#resulttext").text ("Sorry, the total is " + t + ". Roll to try again.");
        run = 0;
        $("#runnumber").text ("run: " + run +" correct")
      }
    } else alert ("Please enter a numberical value...");
  })

  $("#rulesbutton").click (function () {
    $("#rules").toggle();
  })

});