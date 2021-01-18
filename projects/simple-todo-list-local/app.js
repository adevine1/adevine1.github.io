$(document).ready(function () {

  console.log('document read');

  let toDoArray=[];

  if (localStorage,GetItems('bookmarks') != null) {
    let toDoArray = JSON.parse((localStorage.getItem('todoitems')));
  }

  function renderToDo () {
    console.log (toDoArray)
    return;
  }

  console.log ("ready!");

  function getRandomNumber(x) {
    let rand = Math.floor(Math.random() * 100000000) + 10000000;
    return rand;
  }

  $(document).on('click', '#add-item-button', (function () {
    console.log ('clicked add-item-button');
    let texty = $('#create-entry').val();
    let itemid = getRandomNumber();
    console.log(itemid);
    console.log(texty);

    if (texty.trim() != '') {
    $('#item-list').append(`
      <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between" id="${itemid}">

      <span class="item-list" id="text-${itemid}">${texty}</span>
      <div>
        <button id="edit-${itemid}" class="edit-me btn btn-outline-secondary btn-sm mr-1">edit</button>
        <button id="delete-${itemid}" class="delete-me btn btn-outline-danger btn-sm">remove</button>
      </div>
      </li>`);

      $('#create-entry').val('').focus();
    } else {
      alert("please enter a value");
      $('#create-entry').val('').focus();
    }
  }));

  $(document).on('click', '#print-todo', (function () {
    window.print ();
  }));

  $(document).on('click', '.delete-me', (function () {
      console.log('delete-me button clicked');
      if (confirm("Delete?")==true) {
        let self = this.id;
        console.log(self);
        let dashlocation = self.indexOf('-');
        console.log('the dash is at location ' + dashlocation + '.');
        let baseid = self.substring(dashlocation + 1, self.length);
        console.log (baseid);
        $(`#${baseid}`).remove();
        console.log('id removed');
      }
  }));

  $(document).on('click', '.edit-me', (function () {
    console.log('edit-me button clicked');
    let self = this.id;
    console.log(self);
    let dashlocation = self.indexOf('-');
    console.log('the dash is at location ' + dashlocation + '.');
    let baseid = self.substring(dashlocation + 1, self.length);
    console.log (baseid);

    let revisedValue = prompt ("What be thy new entry?");
    if (revisedValue) {
      $(`#text-${baseid}`).text(revisedValue);
    }

  }));

});