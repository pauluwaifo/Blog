function myNotification() {
  let notification = document.getElementById("notification");
  notification.classList.toggle("bi-bell-slash-fill");
}
function myMode() {
  let mode = document.getElementById("mode");
  mode.classList.toggle("bi-moon-stars-fill").transition;
}
function mChange() {
  let idchange = document.querySelectorAll("#id1");
  for (const id1 of idchange ) {
    id1.classList.toggle("dark-mode");
  }
}
function btn() {
  const button = document.querySelectorAll("#btn");
  for (const btn of button) {
    btn.classList.toggle("dropdown-content-dark");
  }
}
function btn2() {
  const button = document.querySelectorAll("#btn2");
  for (const btn of button) {
    btn.classList.toggle("inner-dropdown-content-dark");
  }
  const nbutton = document.querySelectorAll(".Bbtn")
  for (const bnn of nbutton) {
    bnn.classList.toggle("inner-dropbtn-dark")
  }
}

function heading_1() {
  const heading = document.querySelectorAll("h1,h2,h3,h4,h6,#li,#span");
  for (const h1 of heading) {
    h1.classList.toggle("dark-mode-h1");
  }
}
function openNav() {
  document.getElementById("mySidenav").style.right = "0";
}
function closeNav() {
  document.getElementById("mySidenav").style.cssText = "right: -30%;";
}
function mySideNav() {
  let sideNav = document.querySelectorAll("#mySidenav, .form-container");
  for (const mySidenav of sideNav) {
    mySidenav.classList.toggle("sidenav-darkmode");
  }
  
}
function paragraph() {
  let paragraph = document.querySelectorAll("p, .form-container");
  for (p of paragraph) {
    p.classList.toggle("dark-mode-p");
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function searchout() {
  let Search = document.getElementById("search-content");
  Search.onmouseout.classList.remove("display-on")
}
function myLink() {
  let hLinks = document.querySelectorAll("#hl");
  for (hl of hLinks) {
    hl.classList.toggle("txt");
  }
}
function loadMC() {
  let loadMC = document.querySelectorAll("#load-more-content");
  for (const lMoreContent of loadMC ) {
    lMoreContent.classList.toggle("block")
  }
  let x = document.getElementById("lmc");
  if (x.innerText === "Load more post") {
      x.innerText = "Hide post";
  } else {
    x.innerText = "Load more post";
  }
}
function resetH() {
  let rst = document.querySelectorAll("#resetHover");
  for (const txtReset of rst) {
    txtReset.classList.add("cl-2")
  }
}
function resetT() {
  let rst = document.querySelectorAll("#resetHover");
  for (const txtReset of rst) {
    txtReset.classList.remove("cl-2")
  }
}
// Get the elements with class="column"
var elements = document.getElementsByClassName("my-column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}
// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function next() {
  let rnd = Math.floor(Math.random(1) * 1)
  let music = document.querySelectorAll("next");
  music.src='assests/audio/Victony_Kolomental' + rnd + '.ogg';
}