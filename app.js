function initialize () {
      let x = Math.floor ((Math.random () * 4) + 1);
      if (x == 4) {
        document.getElementById("container1").style.backgroundColor='lightsteelblue';
      } else if (x==3) {
        document.getElementById("container1").style.backgroundColor='lightyellow';
      } else if (x=2) {
        document.getElementById("container1").style.backgroundColor="lightgray";
      } else
        document.getElementById("container1").style.backgroundColor="lightskyblue";
}