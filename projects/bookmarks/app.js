$(document).ready(function () {

  console.log('document ready');

  if (localStorage.getItem('bookmarks') === null) {
    localStorage.setItem('bookmarks', '[["12345678", "Programming", "This is an example of a bookmark group. You can add more links in this one, or create other groups, in edit mode.", [["0203023", "Google", "www.google.com"], ["456987", "github", "www.github.com"], ["98657678", "Udemy", "www.udemy.com"]]]]')
  };

  let bookmarks = JSON.parse((localStorage.getItem('bookmarks')));

  console.log(bookmarks);

  renderBookmarks ();

  function renderBookmarks () {
    $(".card").remove();
    for (var x=0; x<bookmarks.length; x++) {
      $("#cardcontainer").append(`<div class="shadow card col-lg-12 col-md-12 col-sm-12 border-secondary" id="${bookmarks[x][0]}">
          <div class="card-body">
            <h5 class="card-title">${bookmarks[x][1]}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${bookmarks[x][2]} </h6>
            <hr>
            <div id="links-${bookmarks[x][0]}">
              <!-- links go here -->
            </div>

            <a href="#" class="btn btn-light btn-sm addbookmark" id="addbookmark-${bookmarks[x][0]}">+ bookmark</a>

            <a href="#" class="btn btn-light btn-sm movegroupup" id="movegroupup-${bookmarks[x][0]}">group ↑</a>

            <a href="#" class="btn btn-light btn-sm movegroupdown" id="movegroupdown-${bookmarks[x][0]}">group ↓</a>

            <a href="#" class="btn btn-light btn-sm removegroup" id="removebookmark-${bookmarks[x][0]}">🗑 group</a>

            <div class="dropdown" id="dropdown-${bookmarks[x][0]}" style="display: none">

              <input type="text" class="form-control mb-2 mr-sm-2 bookmarkname" id="nameoflink-${bookmarks[x][0]}"
                placeholder="Bookmark Name">
              <input type="text" class="form-control mb-2 mr-sm-2 bookmarklink" id="actuallink-${bookmarks[x][0]}" placeholder="www.">
              <a href="#" class="btn btn-primary btn-sm addlink" id="addlink-${bookmarks[x][0]}">Add Link</a>
              <a href="#" class="btn btn-primary btn-sm closeaddlink" id="closeaddlink-${bookmarks[x][0]}">Close</a>

            </div>
          </div>
        </div>`);
    }

    for (var x=0; x<(bookmarks.length); x++) {
      for (var y=0; y<(bookmarks[x][3]).length; y++) {
      $(`#links-${bookmarks[x][0]}`).append(`<p class="card-text" id="${bookmarks[x][3][y][0]}"><a href=${"http://" + bookmarks[x][3][y][2]} target="_blank">${bookmarks[x][3][y][1]} </a></p>`);
      }
    }
  }

  //starts the document with the assumption that the New Boomark creation box is closed
  var newbookmarkgrouphidden = true;

  $('#addbookmarkgroup').toggle();
  $('.addbookmark').toggle ();
  $('.removegroup').toggle ();
  $('.movegroupup').toggle ();
  $('.movegroupdown').toggle ();

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
      for (var x=0; x<bookmarks.length; x++) {
        if ((`${bookmarks [x][0]}`) === baseid)
          bookmarks.splice(x, 1);
          console.log (bookmarks);
          localStorage.setItem('bookmarks', JSON.stringify (bookmarks));
      }
    }
  }))

  $(document).on('click', '#toggleedits', (function () {
    console.log ($(this).text ());
    if ($(this).text ()==="Edit Mode On") {
      $(this).text ("Edit Mode Off")
      $('#addbookmarkgroup').removeClass ('disabled');
      $('.addbookmark').removeClass ('disabled');
      $('.removegroup').removeClass ('disabled');
      $('#newbookmarkgroup').hide ();
      newbookmarkgrouphidden = true;

    } else {$(this).text ("Edit Mode On");
    }
    $('#addbookmarkgroup').toggle();
    $('.addbookmark').toggle ();
    $('.removegroup').toggle ();
    $('.dropdown').hide();
    $('.movegroupup').toggle ();
    $('.movegroupdown').toggle ();
    $('#title').focus();

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
    $('#addbookmarkgroup').addClass ('disabled');
    $('.addbookmark').addClass('disabled');
    $('.removegroup').addClass('disabled');
    $(`#nameoflink-${baseid}`).focus();
  }))

  $(document).on('click', '.movegroupdown', (function () {
    console.log('move group button down clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log('the dash is at location ' + dashlocation + '.');
    let baseid = self.substring(dashlocation + 1, self.length);
    console.log("baseid: " + baseid);
    for (var x=0; x<bookmarks.length; x++) {
      if (bookmarks[x][0] === baseid) {
        console.log ("Found bookmark: " + bookmarks [x]);
         var b= bookmarks [x];
         bookmarks.splice (x, 1);
         bookmarks.splice (x+1, 0, b);
         break;
      }
    }
    localStorage.setItem('bookmarks', JSON.stringify (bookmarks));
     renderBookmarks ();
  }))

  $(document).on('click', '.movegroupup', (function () {
    console.log('move group button up clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log('the dash is at location ' + dashlocation + '.');
    let baseid = self.substring(dashlocation + 1, self.length);
    console.log("baseid: " + baseid);
    for (var x=0; x<bookmarks.length; x++) {
      if (bookmarks[x][0] === baseid) {
        console.log ("Found bookmark: " + bookmarks [x]);
         var b= bookmarks [x];
         bookmarks.splice (x, 1);
         bookmarks.splice (x-1, 0, b);
         break;
      }
    }
    localStorage.setItem('bookmarks', JSON.stringify (bookmarks));
     renderBookmarks ();
  }))


  $(document).on('click', '.addlink', (function () {
      console.log('addlink button clicked');
      let self = this.id;
      console.log(self);
      let dashlocation = self.indexOf('-');
      console.log('the dash is at location ' + dashlocation + '.');
      let baseid = self.substring(dashlocation + 1, self.length);
     if ($(`#nameoflink-${baseid}`).val().trim() !== '') {
      console.log('baseid = ' + baseid + '.');
      console.log('link = ' + $(`#nameoflink-${baseid}`).val());
      console.log('actual link = ' + $(`#actuallink-${baseid}`).val());
      let linkname = $(`#nameoflink-${baseid}`).val();
      let actuallink = $(`#actuallink-${baseid}`).val();
      let randid = getRandomNumber();
      $(`#links-${baseid}`).prepend(`<p class="card-text" id="${randid}"><a href=${'http://'+ actuallink}target="_blank">${linkname}</a></p>
      `);

      let randlinkid = getRandomNumber ();
      for (var x=0; x<bookmarks.length; x++) {
        if (bookmarks [x][0]=== `${baseid}`) {
            (bookmarks [x][3]).unshift([`${randlinkid}`, `${linkname}`, `${actuallink}`]);
        }
       console.log(bookmarks);
       localStorage.setItem('bookmarks', JSON.stringify (bookmarks));
      }

    } else {
      alert("Bookmark name and link are required.");
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

      $("#cardcontainer").prepend(`<div class="shadow card col-md-12 border-secondary" id="${randid}">
          <div class="card-body">
            <h5 class="card-title">${groupname}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${groupdescription} </h6>
            <hr>
            <div id="links-${randid}">
              <!-- links go here -->
            </div>

            <a href="#" class="btn btn-light btn-sm addbookmark disabled" id="addbookmark-${randid}">Add Bookmark</a>

            <a href="#" class="btn btn-light btn-sm movegroupup" id="movegroupup-${randid}">group ↑</a>

            <a href="#" class="btn btn-light btn-sm movegroupdown" id="movegroupdown-${randid}">group ↓</a>

            <a href="#" class="btn btn-light btn-sm removegroup disabled" id="removebookmark-${randid}">🗑 Group</a>

            <div class="dropdown" id="dropdown-${randid}" style="display: none">

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
      // savebookmarks ();
      bookmarks.unshift ([`${randid}`, `${groupname}`, `${groupdescription}`, []]);

      console.log (bookmarks);

      localStorage.setItem('bookmarks', JSON.stringify (bookmarks));
    } else {
      alert("Please enter a name for your bookmark group.");
      $('#bookmarkgroupname').focus();
    }
  })
});