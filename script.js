console.log("Hello, World!")

let sayHiForm = document.getElementById("sayHiForm");
let visitorNameInput = document.getElementById("visitorName");
let formResponse = document.getElementById("formResponse");

sayHiForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formResponse.textContent = "Thanks for saying hi, " + visitorNameInput.value + "! 👋";
    sayHiForm.reset();
});

let menuButton = document.getElementById("menuButton");
let navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("open");
});

// close the mobile menu after clicking a link
let navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("open");
    });
});

let backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});