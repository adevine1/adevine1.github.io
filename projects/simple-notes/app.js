function initialize () {
  document.getElementById("input").addEventListener ("keyup", saveData);
  let myText = document.getElementById ('input');
  myText.focus();
  if ("text885793" in localStorage) {
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
  alert (`This is a simple text editor for jotting notes when loading something bulkier is one step too many. It automatically saves as you type in one local file.

I keep it as the left-most bookmark on my bookmark bar as easy access for a quick note.

Enjoy!`);
  myTextArea.focus();
};

function about () {
  let myTextArea = document.getElementById("input");
  alert ('Simple Notes\nAaron Devine, 2020-21');
  myTextArea.focus();
}
