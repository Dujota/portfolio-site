document.addEventListener('DOMContentLoaded', function(){

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {
  scrollFunction()
  footerTransition()
 };

function scrollFunction() {
  var intFrameWidth = window.innerWidth;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else if (intFrameWidth < 601) {
        document.getElementById("navbar").style.top = "-200px";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

function footerTransition() {
  var intFrameWidth = window.innerWidth;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.getElementById("footer").style.bottom = "0";

  }else if (intFrameWidth < 601 && window.innerHeight + window.scrollY) {
    document.getElementById("footer").style.bottom = "-100px";
  } else {
    document.getElementById("footer").style.bottom = "-100px";
  }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.getElementById("navbar").addEventListener('click', (e) => {
  myFunction()
  e.stopPropagation();
});

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}


}, false);
