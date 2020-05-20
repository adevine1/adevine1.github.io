function initialize () {
      let x = Math.floor ((Math.random () * 3) + 1);
      if (x == 2) {
        document.getElementById("container1").style.backgroundColor='lightsteelblue';
      } else if (x==3) {
        document.getElementById("container1").style.backgroundColor='lightyellow';
      } else
        document.getElementById("container1").style.backgroundColor="lightgreen";
}