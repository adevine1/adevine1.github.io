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
    let check = confirm(
      "Are you sure that you want to delete this bookmark group?"
    );
    if (check == true) {
      $(`#top${self}`).remove();
    }
  })

  $("#creategroup").click(function () {
    $("#maincontainer").append(`<div class="card" id="top2">
    <div class="card-body">
      <h5 class="card-title">Daily</h5>
      <p class="card-text"><a href="https://news.google.com/topstories">Google News</a></p>
      <p class="card-text"><a href="http://www.google.com">Google</a></p>
      <p class="card-text"><a href="http://www.freecodecamp.org">Free Code Camp</a></p>
      <a href="#" class="btn btn-primary">Add Bookmark</a>
      <a href="#" class="btn btn-primary removegroup" id="2">Remove Group</a>
    </div>
  </div>`)
  })

});