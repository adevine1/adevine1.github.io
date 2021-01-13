$(document).ready(function () {

  console.log ("ready!");

  $(document).on('click', '#add-item-button', (function () {
    console.log ('clicked add-item-button');

    $('#item-list').append(`

    <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    <span class="item-list">text!</span>
    <div>
      <button id="12345" class="edit-me btn btn-outline-secondary btn-sm mr-1">edit</button>
      <button id="12345" class="delete-me btn btn-outline-danger btn-sm">remove</button>
    </div>
  </li>`);
  }));

  $(document).on('click', '#print-todo', (function () {
    window.print ();
  }));

});