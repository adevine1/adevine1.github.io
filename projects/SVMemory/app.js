$(document).ready(function() {
    console.log("document ready");
    
    let turns = 0;
    let count = 1;
    let matches = 0;
    let gridnumber = 36;
    let firstValue = 'glipglop';
    let secondValue = 'gloopglip';

    for (var x=1; x<gridnumber+1; x++) {
        $(".grid").append(`<div class="cell hidden" id="${x}">${x}</div>`)
    }

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }

    characterArray=[18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    for (var x=0; x<100000; x++)
      shuffle(characterArray);

    // all click functions go here  
    $(".cell").click (function () {
      if (this.classList.contains ("hidden")) {
        let id=this.id;
        console.log ("count: " + count);
    
        this.innerHTML=`<img src="${characterArray[id-1]}.JPG">`;
        this.classList.remove("hidden"); 
        //add showing class here
  
        if (count === 1) {
          firstValue = id;
          console.log ("first value: " + characterArray[firstValue-1]);
          count++;
        } else {

        if (count === 2) {
          secondValue = id;
          console.log ("second value: " + characterArray[secondValue-1]);
          if (characterArray[firstValue-1] === characterArray[secondValue-1]) {
            console.log ('match!'); 
            matches ++;
            var ding = new Audio("Call-bell-ding.mp3");
              ding.play();
            }
            else {
              console.log ('no match -- try again');
              var error = new Audio("Error.mp3");
                error.play();
              setTimeout(function (firstValue, secondValue) { 
                document.getElementById(firstValue).innerHTML=firstValue;
                document.getElementById(secondValue).innerHTML=secondValue;
                document.getElementById(firstValue).classList.add("hidden");
                document.getElementById(secondValue).classList.add("hidden");
                //remove showing classes here
              }, 700, firstValue, secondValue);  
            }
          firstValue = 'glipglop';
          secondValue = 'gloopglip';
          count =1;
          turns ++;
          document.getElementById("turns").innerText=`turns: ${turns}`;
          //document.getElementById("matches").innerText=`matches: ${matches}`;
          if (matches===gridnumber/2) {
       
            setTimeout (function () {
              let playAgain=confirm ("Nice work, farmer! You finished in " + turns + " moves. Your grandpa would be proud. \n\nPlay Again?");
              if (playAgain===true) 
                location.reload();
            }, 500);
          }
        }
      }
     }
    });
});