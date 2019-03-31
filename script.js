var open = document.getElementById("open");
var nav = document.getElementById("nav");
var artical = document.getElementById("artical");

function openNav() {
   nav.style.width= "25%";
   open.style.display="none";
   artical.style.width = "70%";
}
function closeNav() {
   nav.style.width = "0";
   open.style.display = "inline";
     artical.style.width = "90%";
}