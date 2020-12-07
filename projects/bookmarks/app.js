$(document).ready(function () {

  alert("ready!");
  console.log('document ready');

  var newbookmarkgrouphidden = false;

  $("#addbookmark").click(function () {
    if (newbookmarkgrouphidden === false) {
      $("#newbookmarkgroup").show();
      console.log("hit addbookmark")
      newbookmarkgrouphidden = true;
    } else {
      $("#newbookmarkgroup").hide();
      newbookmarkgrouphidden = false;
    }
  });

  $("#closebutton").click(function () {
    $("#newbookmarkgroup").hide();
    newbookmarkgrouphidden = false;
  })

  //need to frame function this way, as adding elements via jQuery does not add element to the dom
  //otherwise, jQuery does not recognize button clicks for added elements
  $(document).on('click', '.removegroup', (function () {
    let self = this.id;
    console.log('removegroup button clicked');
    console.log(self);
    let check = confirm(
      "Are you sure that you want to delete this bookmark group?"
    );
    if (check == true) {
      $(`#top${self}`).remove();
    }
  }))

  function getRandomNumber(x) {
    let rand = Math.floor(Math.random() * 100000) + 1000;
    return rand;
  }

  $("#creategroup").click(function () {
    let rand = getRandomNumber();
    var groupname = $('#bookmarkgroupname').val();
    $("#cardcontainer").prepend (`<div class="card" id="top${rand}">
    <div class="card-body">
      <h5 class="card-title">${groupname}</h5>
      <p class="card-text"><a href="https://news.google.com/topstories">Google News</a></p>
      <p class="card-text"><a href="http://www.google.com">Google</a></p>
      <p class="card-text"><a href="http://www.freecodecamp.org">Free Code Camp</a></p>
      <a href="#" class="btn btn-primary">Add Bookmark</a>
      <a href="#" class="btn btn-primary removegroup" id="${rand}">Remove Group</a>
    </div>
  </div>`)
  })

});