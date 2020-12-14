$(document).ready(function () {

  // alert("ready!");
  console.log('document ready');

  //starts the document with the assumption that the New Boomark creation box is closed
  var newbookmarkgrouphidden = true;


  //toggles the New Bookmark creation box
  $("#addbookmark").click(function () {
    if (newbookmarkgrouphidden === true) {
      $("#newbookmarkgroup").show();
      console.log("hit addbookmark")
      newbookmarkgrouphidden = false;
      $('#addbookmark').addClass('disabled');
      $('#bookmarkgroupname').focus();
    } else {
      $("#newbookmarkgroup").hide();
      newbookmarkgrouphidden = true;
    }
  });

  //closes the New Bookmark creation box
  $("#closebutton").click(function () {
    $("#newbookmarkgroup").hide();
    newbookmarkgrouphidden = false;
    $('#addbookmark').removeClass('disabled');
    newbookmarkgrouphidden = true;
  })

  $(document).on('click', '.closeaddlink', (function () {
    console.log('removegroup button clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log ('the dash is at location ' + dashlocation + '.');
    let baseid=self.substring(dashlocation+1, self.length);
    console.log('baseid = ' + baseid + '.');
    $(`#dropdown-${baseid}`).toggle();
  }))

  //need to frame function this way, as adding elements via jQuery does not add element to the dom.
  //otherwise, jQuery does not recognize button clicks for added elements
  $(document).on('click', '.removegroup', (function () {
    console.log('removegroup button clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log ('the dash is at location ' + dashlocation + '.');
    let baseid=self.substring(dashlocation+1, self.length);
    console.log('baseid = ' + baseid + '.');
    // let parentid = self.
    let check = confirm(
      "Are you sure that you want to delete this bookmark group?"
    );
    if (check == true) {
      $(`#${baseid}`).remove();
    }
  }))

  $(document).on('click', '.addbookmark', (function () {
    console.log('addbookmark button clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log ('the dash is at location ' + dashlocation + '.');
    let baseid=self.substring(dashlocation+1, self.length);
    console.log('baseid = ' + baseid + '.');
    $(`#dropdown-${baseid}`).toggle();
  }))

  $(document).on('click', '.addlink', (function () {
    console.log('addlink button clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log ('the dash is at location ' + dashlocation + '.');
    let baseid=self.substring(dashlocation+1, self.length);
    console.log('baseid = ' + baseid + '.');
    console.log('link = ' + $(`#nameoflink-${baseid}`).val());
    console.log('actual link = ' + $(`#actuallink-${baseid}`).val());
    let linkname = $(`#nameoflink-${baseid}`).val();
    let actuallink = $(`#actuallink-${baseid}`).val();

    let randid = getRandomNumber()
    $(`#links-${baseid}`).prepend(`<p class="card-text" id="${randid}"><a href=${actuallink}>${linkname}</a></p>
    `);
  }))

 $(document).on('keypress', function () {
   if (onlink) {
     $(`#${globalid}`).remove();
   }
 })


  //this is the ID random number generator. Big enough that repeats not likely.
  function getRandomNumber(x) {
    let rand = Math.floor(Math.random() * 100000000) + 100000;
    return rand;
  }

  //this is the function that creates a default New Bookmark Group
  //it gets a random number for its id, and takes the groupname and description from the New Bookmark box
  $("#creategroup").click(function () {
    let randid = getRandomNumber();
    var groupname = $('#bookmarkgroupname').val();
    var groupdescription = $('#bookmarkgroupdescription').val();
    $("#cardcontainer").prepend (`<div class="card col-lg-12 col-md-12 col-sm-12" id="${randid}">
      <div class="card-body">
        <h5 class="card-title">${groupname}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${groupdescription} </h6>
        <p class="card-text"><a href="https://news.google.com/topstories">Google News</a></p>
        <p class="card-text"><a href="http://www.google.com">Google</a></p>
        <p class="card-text"><a href="http://www.freecodecamp.org">Free Code Camp</a></p>
        <a href="#" class="btn btn-primary addbookmark">Add Bookmark</a>
        <a href="#" class="btn btn-primary removegroup" id="${randid}">Remove Group</a>
      </div>
    </div>`);
    $('#bookmarkgroupname').val('');
    $('#bookmarkgroupdescription').val('');
  })

});