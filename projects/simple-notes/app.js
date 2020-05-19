function initialize () {
  document.getElementById("input").addEventListener ("keyup", saveData);
  let myText = document.getElementById ('input');
  myText.focus();
  if ("text885793" in localStorage) {
    let loadText = localStorage.getItem("text885793");
    myText.value=loadText;
  }
}

function loadSavedData () {
  let myText = document.getElementById ('input');
  let check = confirm ("Revert to Saved Data? Saved data may be different than recent changes made to screen.");
  if (check == true) {
    let loadText = localStorage.getItem("text885793");
    myText.value=loadText;
  }
}

function saveData() {
  var textToSave =document.getElementById("input").value;
  localStorage.setItem("text885793", textToSave); // save the item
}

function help () {
  let myTextArea = document.getElementById("input");
  alert (`Hello!

This is a simple text editor for a quick jotting of notes when loading something bulkier is one step too many. No frills, no thrills, no formatting. It automatically saves as you type (in one local file). Right-clicking gives some basic formatting and editing options.

I keep it as the left-most bookmark on your bookmark bar, as it's really easy access for a quick note.

Enjoy!`);
  myTextArea.focus();
};