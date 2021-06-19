var navthemebtnvar = document.getElementById("navthemebtn");
var navthemelivar = document.getElementById("navthemeli")
function navthemebtn() {
    navthemebtnvar.innerHTML = "dark_mode";
    navthemelivar.setAttribute("onclick","navthemebtn1()");
}

function navthemebtn1() {
    navthemebtnvar.innerHTML = "wb_sunny";
    navthemelivar.setAttribute("onclick","navthemebtn()");
}

var navthemebtnothervar = document.getElementById("navthemebtnotherid");
var navthemebtnidvar = document.getElementById("navthemebtnid");

function navthemebtnother() {
    navthemebtnidvar.innerHTML = "light theme"
    navthemebtnothervar.setAttribute("onclick","navthemebtnother1()");
}

function navthemebtnother1() {
    navthemebtnidvar.innerHTML = "dark theme"
    navthemebtnothervar.setAttribute("onclick","navthemebtnother()");
}

function navhambtn() {document.getElementById("navbtnother").classList.toggle("nav-btn-other-shown");}