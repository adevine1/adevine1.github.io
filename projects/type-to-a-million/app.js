$(document).ready(function() {
  console.log("document ready");

let maincount = -1;
let rowcount = 0;
let row=1;

//this function prevents the spacekey from scrolling down when typing is happening.
window.addEventListener('keydown', function (e){
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
})

$(document).keyup (function () {
  maincount++;
  //let row = Math.round(count/1000)+1
  console.log (maincount);
  $("#count").text(`Count: ${maincount}`);
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(1,1,maincount,1);
})

});