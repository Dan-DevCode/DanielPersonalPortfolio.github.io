/*
    CSS File: Javascript
    Student's Name: Daniel Samarin
    StudentID: 301349231
    Date: 5/31/2024
*/

document.addEventListener("DOMContentLoaded", function() {
    // Highlight the current page in the navigation bar
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("header nav ul li a");
    
    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        }
    });

    // Handle form submission
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            contactNumber: document.getElementById("contact-number").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        console.log("Form Submitted:", formData);

        // Redirect to home page
        window.location.href = "index.html";
    });
});

