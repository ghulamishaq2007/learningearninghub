// SLIDER AUTO CHANGE
let slides = document.querySelectorAll(".slide");
let index = 0;

// ONLINE CLASS PASSWORD
function openClass(){
document.getElementById("classBox").style.display="block";
}

function checkClass(){
let pass = document.getElementById("classPass").value;

if(pass === "2468"){
alert("This is only for students");
}else{
document.getElementById("classMsg").innerText="Wrong Password";
}
}

// ADMIN PANEL
function adminPanel(){
document.getElementById("adminBox").style.display="block";
}

function checkAdmin(){
let pass = document.getElementById("adminPass").value;

if(pass === "ishaq"){
let link = prompt("Enter Google Meet / Zoom link");
alert("Link Saved (demo): " + link);
}else{
document.getElementById("adminMsg").innerText="Wrong Password";
}
}







// saved class link
let savedLink = "";

// OPEN OWNER BOX
function openOwner(){
document.getElementById("ownerBox").style.display="block";
}

// OWNER PASSWORD CHECK
function checkOwner(){
let pass = document.getElementById("ownerPass").value;

if(pass === "ishaq"){
document.getElementById("ownerBox").style.display="none";
document.getElementById("linkBox").style.display="block";
}else{
document.getElementById("ownerMsg").innerText = "This is only for owner ❌";
}
}

// SAVE LINK
function saveLink(){
savedLink = document.getElementById("classLink").value;
alert("Class link saved ✔");
document.getElementById("linkBox").style.display="none";
}

// JOIN CLASS
function joinClass(){
if(savedLink !== ""){
window.location.href = savedLink;
}else{
alert("No class is right now  ❌");
}
}