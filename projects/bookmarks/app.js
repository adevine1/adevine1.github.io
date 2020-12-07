$(document).ready(function () {

  alert("ready!");
  console.log('document ready');

  var newbookmarkgrouphidden = false;

  $("#addbookmark").click(function () {
    if (newbookmarkgrouphidden === false) {
      $("#newbookmarkgroup").show ();
      console.log("hit addbookmark")
      newbookmarkgrouphidden = true;
    } else {
      $("#newbookmarkgroup").hide ();
      newbookmarkgrouphidden = false;
    }
  });

  $("#closebutton").click(function () {
    $("#newbookmarkgroup").hide ();
    newbookmarkgrouphidden = false;
  })

  $(".removegroup").click(function () {
    let self=this.id;
    console.log ('removegroup button clicked');
    console.log(self);
    $(`#top${self}`).remove();
  })


});