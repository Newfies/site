document.addEventListener("DOMContentLoaded", (event) => {
    window.alert("Sorry for the popup.. this is a notice that the buttons goto duplicated versions of the homescreen, and as of right now i dont know what i will be doing with this. also note, ive never made websites designed to be good on mobile.. this is no different. so sorry..")
});

const projects = document.getElementById("projects");
const contributes = document.getElementById("contributes");
const landm = document.getElementById("landm");
const contacts = document.getElementById("contacts");

projects.addEventListener("click", function(){
    window.location.assign("projects.html");
});

contributes.addEventListener("click", function(){
    window.location.assign("contributes.html");
});

landm.addEventListener("click", function(){
    window.location.assign("landm.html");
});

contacts.addEventListener("click", function(){
    window.location.assign("contacts.html");
});