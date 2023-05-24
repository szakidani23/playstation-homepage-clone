// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the first navbar (for PC)
var navbarPC = document.getElementById("navbar navbar-pc");
var stickyPC = navbarPC.offsetTop;

// Get the second navbar (for mobile)
var navbarResponsive = document.getElementById("navbar navbar-responsive");
var stickyResponsive = navbarResponsive.offsetTop;

// Add the sticky class to the corresponding navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= stickyPC) {
    navbarPC.classList.add("sticky");
  } else {
    navbarPC.classList.remove("sticky");
  }

  if (window.pageYOffset >= stickyResponsive) {
    navbarResponsive.classList.add("sticky");
  } else {
    navbarResponsive.classList.remove("sticky");
  }
}