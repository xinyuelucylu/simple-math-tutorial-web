var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
      document.getElementById("topnav").style.backgroundColor = "white";
  } else {
    document.getElementById("topnav").style.top = "-50px";
      document.getElementById("topnav").style.backgroundColor = "white";
  }
    prevScrollpos = currentScrollPos;
}

