document.addEventListener("DOMContentLoaded", (e) => {
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;

  //Window scrolling event handler
  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  };
});
