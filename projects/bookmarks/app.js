$(document).ready(function () {

  console.log('document ready');

  // const bookmarks =
  //
  //       {

  //             'id': "14567",
  //             'name': "Programming",
  //             'description': "programming stuff",
  //             'links': [[123121234], ['name'], ['link']]
  //
  //     };
  // localStorage.setItem('bookmarks0192837465', JSON.stringify (bookmarks));

  console.log(localStorage.getItem('bookmarks0192837475'));

  let boomkarks = JSON.parse(window.localStorage.getItem('bookmarks0192837475'));

  console.log (bookmarks[1]);


  //starts the document with the assumption that the New Boomark creation box is closed
  var newbookmarkgrouphidden = true;

  //this is a bookmark object that will hold data that is loaded and rendered in html
  // loadbookmarks ();
  // renderbookmarks ();

  //toggles the New Bookmark creation box
  $("#addbookmarkgroup").click(function () {
    if (newbookmarkgrouphidden === true) {
      $("#newbookmarkgroup").show();
      console.log("hit addbookmark")
      newbookmarkgrouphidden = false;
      $('#addbookmarkgroup').addClass('disabled');
      $('.addbookmark').addClass('disabled');
      $('.removegroup').addClass('disabled');
      $('#bookmarkgroupname').focus();
    } else {
      $("#newbookmarkgroup").hide();
      newbookmarkgrouphidden = true;
    }
  });

  //closes the New Bookmark creation box
  $("#closebutton").click(function () {
    $("#newbookmarkgroup").hide();
    // newbookmarkgrouphidden = false;
    $('#addbookmarkgroup').removeClass('disabled');
    newbookmarkgrouphidden = true;
    $('.addbookmark').removeClass('disabled');
    $('.removegroup').removeClass('disabled');
  })

  $(document).on('click', '.closeaddlink', (function () {
    console.log('removegroup button clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log('the dash is at location ' + dashlocation + '.');
    let baseid = self.substring(dashlocation + 1, self.length);
    console.log('baseid = ' + baseid + '.');
    $(`#dropdown-${baseid}`).toggle();
    $('#addbookmarkgroup').removeClass('disabled');
    $('.addbookmark').removeClass('disabled');
    $('.removegroup').removeClass('disabled');
    $(`#nameoflink-${baseid}`).val('');
    $(`#actuallink-${baseid}`).val('');
  }))

  //need to frame function this way, as adding elements via jQuery does not add element to the dom.
  //otherwise, jQuery does not recognize button clicks for added elements
  $(document).on('click', '.removegroup', (function () {
    console.log('removegroup button clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log('the dash is at location ' + dashlocation + '.');
    let baseid = self.substring(dashlocation + 1, self.length);
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
    console.log('the dash is at location ' + dashlocation + '.');
    let baseid = self.substring(dashlocation + 1, self.length);
    console.log('baseid = ' + baseid + '.');
    $(`#dropdown-${baseid}`).toggle();
    $('#addbookmarkgroup').addClass('disabled');
    $('.addbookmark').addClass('disabled');
    $('.removegroup').addClass('disabled');
    $(`#nameoflink-${baseid}`).focus();
  }))

  $(document).on('click', '.addlink', (function () {
    if ($('#bookmarkgroupname').val().trim() !== '') {
      console.log('addlink button clicked');
      let self = this.id;
      console.log(self);
      let dashlocation = self.indexOf('-');
      console.log('the dash is at location ' + dashlocation + '.');
      let baseid = self.substring(dashlocation + 1, self.length);
      console.log('baseid = ' + baseid + '.');
      console.log('link = ' + $(`#nameoflink-${baseid}`).val());
      console.log('actual link = ' + $(`#actuallink-${baseid}`).val());
      let linkname = $(`#nameoflink-${baseid}`).val();
      let actuallink = $(`#actuallink-${baseid}`).val();
      let randid = getRandomNumber();
      $(`#links-${baseid}`).prepend(`<p class="card-text" id="${randid}"><a href=${'http://'+ actuallink}>${linkname} target="_blank"</a></p>
      `);
    } else {
      alert("Need a name for a bookmark group");
    }
  }))

  //this is the ID random number generator. Big enough that repeats not likely.
  function getRandomNumber(x) {
    let rand = Math.floor(Math.random() * 100000000) + 1000000;
    return rand;
  }

  //this is the function that creates a default New Bookmark Group
  //it gets a random number for its id, and takes the groupname and description from the New Bookmark box
  $("#creategroup").click(function () {
    let randid = getRandomNumber();
    var groupname = $('#bookmarkgroupname').val();
    var groupdescription = $('#bookmarkgroupdescription').val();
    if ((groupname).trim() !== '') {

      $("#cardcontainer").prepend(`<div class="card col-lg-12 col-md-12 col-sm-12 border-secondary" id="${randid}">
          <div class="card-body">
            <h5 class="card-title">${groupname}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${groupdescription} </h6>
            <div id="links-${randid}">
              <!-- links go here -->
            </div>

            <a href="#" class="btn btn-primary btn-sm addbookmark disabled" id="addbookmark-${randid}">Add Bookmark</a>
            <a href="#" class="btn btn-primary btn-sm removegroup disabled" id="removebookmark-${randid}">Remove Group</a>

            <div id="dropdown-${randid}" style="display: none">

              <input type="text" class="form-control mb-2 mr-sm-2 bookmarkname" id="nameoflink-${randid}"
                placeholder="Bookmark Name">
              <input type="text" class="form-control mb-2 mr-sm-2 bookmarklink" id="actuallink-${randid}" placeholder="www.">
              <a href="#" class="btn btn-primary btn-sm addlink" id="addlink-${randid}">Add Link</a>
              <a href="#" class="btn btn-primary btn-sm closeaddlink" id="closeaddlink-${randid}">Close</a>
            </div>
          </div>
        </div>`);

      $('#bookmarkgroupname').val('');
      $('#bookmarkgroupdescription').val('');

      //this function will save the newly created bookmark to local storage
      savebookmarks ();
    } else {
      alert("Please enter a name for your bookmark group.");
      $('#bookmarkgroupname').focus();
    }
  })
});