document.addEventListener("DOMContentLoaded", (event) => {
    if (!localStorage.getItem('Alerted') || localStorage.getItem('Alerted') !== 'true') {
        // Display the alert
        alert('hi');
        // Set Alerted to true in localStorage
        localStorage.setItem('Alerted', 'true');
    };
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