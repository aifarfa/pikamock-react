function openNav() {
  document.getElementById("mySidenav").style.width = "275px";
  document.getElementById("main").style.marginLeft = "275px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

$(document).ready(function(){
  $('.pikapok__slider').slick({
    infinite: true,
    autoplay: true
  });
});