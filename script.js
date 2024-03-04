document.addEventListener("DOMContentLoaded", (event) => {
    if (!localStorage.getItem('Alerted') || localStorage.getItem('Alerted') !== 'viewed') {
        // Display the alert
        alert("All pages will display the same thing as they are just duplicated, This website is currently a testing/example page.. It may be removed, Its still a WIP and is designed to become a About Me page. Please note this is not designed to be viewed on mobile devices and may look wacky if your on it.");
        // Set Alerted to true in localStorage
        localStorage.setItem('Alerted', 'viewed');
    };
});

const projects = document.getElementById("projects");
const contributes = document.getElementById("contributes");
const landm = document.getElementById("landm");
const contacts = document.getElementById("contacts");

/*

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

*/
