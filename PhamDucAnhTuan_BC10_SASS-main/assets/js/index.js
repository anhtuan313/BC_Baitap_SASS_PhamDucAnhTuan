//Sidebar
document.getElementsByClassName("fa-bars")[0].addEventListener("click", () => {
  document.getElementById("menuBars").classList.toggle("click");
  document.getElementById("port").classList.toggle("show");
  document.getElementsByClassName("navbar-toggler")[0].click();
  document.body.classList.toggle("stop-scrolling");
});

// header scroll
window.onscroll = () => headerScroll();
const headerScroll = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("header").classList.add("header-fixed");
  } else {
    document.getElementById("header").classList.remove("header-fixed");
  }
};
