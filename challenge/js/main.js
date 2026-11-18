function circle() {
document.getElementById("shapes").innerHTML =
"<div style='background:blue;width:200px;height:200px;border-radius:50%'></div>";
}

function rectangle() {
document.getElementById("shapes").innerHTML =
"<div style='background:blue;width:300px;height:150px'></div>";
}

function triangle() {
document.getElementById("shapes").innerHTML =
"<div style='background:blue;width:200px;height:200px;clip-path:polygon(50% 0,0 100%,100% 100%)'></div>";
}